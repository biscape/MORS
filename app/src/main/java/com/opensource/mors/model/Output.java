package com.opensource.mors.model;

import android.content.ComponentName;
import android.content.ServiceConnection;
import android.media.AudioManager;
import android.media.ToneGenerator;
import android.os.IBinder;
import android.util.Log;

import com.opensource.mors.FloatingWidgetService;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.lang.reflect.Field;
import java.util.Set;

public class Output {



    private String output;
    private File outputFile;
    private String scriptName;
    private String name;
    private Thread executor;
    private Thread saver;
    private FloatingWidgetService floatingBubbleServiceBinder;
    public ServiceConnection myConnection = new ServiceConnection() {

        public void onServiceConnected(ComponentName className, IBinder binder) {
            floatingBubbleServiceBinder = ((FloatingWidgetService.BubbleBinder) binder).getService();
            Log.d("ServiceConnection","connected");
            floatingBubbleServiceBinder.setText("");
        }

        public void onServiceDisconnected(ComponentName className) {
            Log.d("ServiceConnection","disconnected");
            floatingBubbleServiceBinder = null;
        }
    };

    public Output(File fileDir, String scriptName) {
        this.output = "";
        this.scriptName = scriptName;
        if(fileDir.isDirectory()){
            findFile(fileDir);
        }else{
            this.outputFile = fileDir;
            loadOutput();
        }
        this.name = outputFile.toString();
        try {
            updateThreads();
        } catch (NoSuchMethodException e) {
            e.printStackTrace();
        } catch (NoSuchFieldException e) {
            e.printStackTrace();
        } catch (IllegalAccessException e) {
            e.printStackTrace();
        }

    }
    private void updateThreads() throws NoSuchMethodException, NoSuchFieldException, IllegalAccessException {
//        Method getThreads = Thread.class.getDeclaredMethod("getThreads");
        Field target = Thread.class.getDeclaredField("target");
        target.setAccessible(true);
//        getThreads.setAccessible(true);
        Set<Thread> threadSet = Thread.getAllStackTraces().keySet();
        for (Object obj : threadSet){
            Thread thread = ((Thread) obj);
            Object runnable = target.get(thread);
            if (runnable instanceof Script.GetExecutionOutput && ((Script.GetExecutionOutput) runnable).getOutput().getName().equals(this.name)){
                executor = thread;
            }
            if(runnable instanceof Script.SaveExecutionOutput && ((Script.SaveExecutionOutput) runnable).getOutput().getName().equals(this.name)){
                saver = thread;
            }
        }
    }
    public boolean isExecuted(){
        return executor != null;
    }
    public String getStatus(){
        if (isExecuted()){
            return "Executing";
        }
        return FileUtils.getWellFormattedDate(outputFile.lastModified());
    }
    public void loadOutput(){
        StringBuilder text = new StringBuilder();
        try {
            BufferedReader br = new BufferedReader(new FileReader(outputFile));
            String line;

            while ((line = br.readLine()) != null) {
                text.append(line);
                text.append('\n');
            }
            br.close();
        } catch (IOException e) {
            //You'll need to add proper error handling here
        }
        output = text.toString();
    }

    private void findFile(File fileDir){
        if(outputFile == null){
            int n = findN(fileDir);
            outputFile = new File(fileDir.toString() +"/" + scriptName + ".output" + n);
            try {
                outputFile.createNewFile();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }
    public String getOutput() {
        return output;
    }

    public void addOutput(String text){
        this.output = text;
        if(floatingBubbleServiceBinder != null){
            String lastLine = text.split("\n")[text.split("\n").length-1];
            executeOutput(lastLine);
        }
    }
    public void executeOutput(String text) {
        //care, adding more functions might lead to negative outcomes. This might be dangerous!
        if(text.contains("bubble(")){
            String subtext = text.substring(text.indexOf("bubble(")+("bubble(").length(), text.lastIndexOf(")"));
            if (subtext.contains(",$")){
               String[] arguments = subtext.split("[,][$]");
                floatingBubbleServiceBinder.setText(arguments[0]);
                floatingBubbleServiceBinder.setColor(arguments[1]);
            }else{
                floatingBubbleServiceBinder.setText(subtext);
            }

        }
        if(text.contains("beep()")){
            ToneGenerator toneGen1 = new ToneGenerator(AudioManager.STREAM_MUSIC, 100);
            toneGen1.startTone(ToneGenerator.TONE_CDMA_PIP,150);
        }

    }

    public void save(){
        FileUtils.saveToFile(outputFile, output);
    }

    private int findN(File outputDir) {
        File fileList[] = outputDir.listFiles();
        int maxoutput = 0;
        for (int i = 0; i < fileList.length; ++i) {
            String filelistname = fileList[i].toString();
            if (filelistname.matches(".*"+scriptName+"[.]output[0-9]*$")) {
                int filelistnumber = Integer.valueOf(filelistname.split("output")[1].replaceAll("[^\\d]", ""));
                if (filelistnumber > maxoutput){
                    maxoutput = filelistnumber;
                }
            }
        }
        return maxoutput+1;
    }

    public String getName() {
        return name;
    }

    public void setExecutor(Thread thread) {
        this.executor = thread;
    }
    public void setSaver(Thread thread) {
        this.saver = thread;
    }

    public void start() {
        if(executor != null && saver != null){
            executor.start();
            saver.start();
        }
    }

    public void stop() {
        if(executor != null && saver != null){
            executor.stop();
            saver.stop();
        }
    }

    public String getScriptName() {
        return scriptName;
    }
}
