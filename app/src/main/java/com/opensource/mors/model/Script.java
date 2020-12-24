package com.opensource.mors.model;

import android.content.Context;
import android.content.Intent;
import android.os.Build;
import android.provider.Settings;
import android.util.Log;
import android.widget.Toast;

import com.opensource.mors.FloatingWidgetService;
import com.opensource.mors.MainActivity;

import java.io.BufferedReader;
import java.io.DataOutputStream;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public class Script {
    private String filepath;
    private String filename;
    private String code;
    private String path;
    private List<String> parameters;
    private File file;
    private List<Output> output;


    public Script(File file) {
        this.file = file;
        this.filepath = file.toString();
        int divider = filepath.lastIndexOf("/");
        this.filename = filepath.substring(divider + 1);
        this.path = filepath.substring(0, divider);
        output = new ArrayList<>();
        loadCode();
        loadParameters();
        loadOutputs();


    }



    public String getName() {
        return filename;
    }
    public String getPath() {
        return path;
    }

    public String getDescription() {
        return (!output.isEmpty()?output.get(output.size() - 1).getOutput():"Tap to modify, hold to execute.");
    }

    private void loadCode(){
        StringBuilder text = new StringBuilder();
        try {
            BufferedReader br = new BufferedReader(new FileReader(file));
            String line;

            while ((line = br.readLine()) != null) {
                text.append(line);
                text.append('\n');
            }
            br.close();
        } catch (IOException e) {
            //You'll need to add proper error handling here
        }
        code = text.toString();
    }
    private void loadOutputs(){
        File directory = new File(this.path);
        File fileList[] = directory.listFiles();
        for (int i = 0; i < fileList.length; ++i) {
            String filename = fileList[i].toString();
            if (filename.matches(".*" + this.filename+"[.]output[0-9]*$")) {
                output.add(new Output(fileList[i], this.filename));
            }
        }
    }
    public List<String> getParameters(){
        return parameters;
    }
    private void loadParameters() {
        parameters = new ArrayList<>();

        for (String var : code.split("[!][$]")) {
            String varname = var.split("\\W")[0];
            if (parameters.indexOf(varname) == -1 && code.indexOf(varname) > 0) {
                parameters.add(varname);
            }
        }
    }
    public Script cloneWithParameters(Map<String, String> values){
        Script newScript = new Script(this.file);
        String namedifference = "";
        String newcode = this.code;
        for(String paramName : values.keySet()){
            namedifference += "." + values.get(paramName);
            newcode = newcode.replaceAll("[!][$]" + paramName, values.get(paramName));
            Log.d("HEY","USING PARAMS" + paramName + " " + values.get(paramName));
        }
        newScript.setCode(newcode);
        newScript.loadParameters();
        String newfilename = filepath.substring(0,filepath.lastIndexOf(".")) + namedifference + filepath.substring(filepath.lastIndexOf("."));
        newScript.setFile(new File(newfilename));
        newScript.save();
        return newScript;
    }

    private void setFile(File file) {
        this.file = file;
    }

    public void execute(OutputListener outputListener) {
        Output localOut = new Output(outputListener.getApplicationContext().getFilesDir(), filename);
        localOut.setExecutor((new Thread(new GetExecutionOutput(outputListener, this, localOut))));
        localOut.setSaver(new Thread(new SaveExecutionOutput(outputListener, localOut)));
        localOut.start();
        bindBubble(outputListener, localOut);
        output.add(localOut);
    }
    protected void bindBubble(OutputListener outputListener, Output localOut){
        // To prevent starting the service if the required permission is NOT granted.
        if (Build.VERSION.SDK_INT == Build.VERSION_CODES.M) {
            if (!Settings.canDrawOverlays(outputListener.getApplicationContext())) {
                //Permission is not available. Display error text.
                Toast.makeText(outputListener.getApplicationContext(), "Draw over other app permission not available. Can't start the application without the permission.", Toast.LENGTH_LONG).show();
                outputListener.getActivity().finish();
            }

        } else {
            Toast.makeText(outputListener.getApplicationContext(), "Opening overlay.", Toast.LENGTH_LONG).show();
//            startService(new Intent(MainActivity.this, FloatingWidgetService.class));
            outputListener.getActivity().bindService(new Intent(outputListener.getActivity(), FloatingWidgetService.class), localOut.myConnection, Context.BIND_AUTO_CREATE);

        }
    }

    public boolean isParametrized(){
        return !this.parameters.isEmpty();
    }
    public String getCode() {
        return code;
    }

    public void setCode(String text) {
        this.code = text;
    }

    public void save() {
        FileUtils.saveToFile(file, code);
    }

    public List<Output> getOutputs() {
        return output;
    }


    class SaveExecutionOutput implements Runnable {
        private OutputListener outputListener;
        private Output output;

        SaveExecutionOutput(OutputListener outputListener, Output output) {
            this.outputListener = outputListener;
            this.output = output;
        }

        Output getOutput() {
            return output;
        }

        @Override
        public void run() {
            while (true){
                try {
                    Thread.sleep(10000);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
                outputListener.checkRequiredPermission();
                output.save();
            }
        }
    }


    class GetExecutionOutput implements Runnable {

        private OutputListener outputListener;
        private Script script;
        private String filepath;
        private Output output;

        GetExecutionOutput(OutputListener outputListener, Script script, Output output) {
            this.script = script;
            this.filepath = script.filepath;
            this.outputListener = outputListener;
            this.output = output;
        }


        void publishProgress(final String progress) {
//            Log.d("Output","-------------\n" + progress);

            outputListener.runOnUiThread(new Runnable() {
                @Override
                public void run() {
                    output.addOutput(progress);
                    outputListener.invalidateOutput();

                }
            });
        }

        Output getOutput() {
            return output;
        }

        @Override
        public void run() {
            try {
                Process process = Runtime.getRuntime().exec("su");
                DataOutputStream outputStream = new DataOutputStream(process.getOutputStream());

                outputStream.writeBytes("/data/local/tmp/frida-inject -n 'com.jagex.oldscape.android' -s " + filepath + " &\n");
                outputStream.flush();
                BufferedReader inputReader = new BufferedReader(new InputStreamReader(process.getInputStream()));
                BufferedReader errorReader = new BufferedReader(new InputStreamReader(process.getErrorStream()));
                String line;
                StringBuffer buffer = new StringBuffer();
                try {
                    while ((line = inputReader.readLine()) != null || (line = errorReader.readLine()) != null) {
                        Thread.sleep(1);
                        buffer.append(line + "\n");
                        Log.d("Output",line);

                        publishProgress(buffer.toString());
                    }
//                    Log.d("output: ", "FINISHED!!!!");

                } catch (IOException e) {
                    Log.e("readMem", e.toString());
                    buffer.append(e.toString()+"\n");
                    publishProgress(buffer.toString());

                }
            } catch (IOException | InterruptedException e) {
                Log.d("CMDR", e.toString());
            }
        }
    }

}