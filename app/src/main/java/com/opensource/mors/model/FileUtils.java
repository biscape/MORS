package com.opensource.mors.model;

import android.content.Context;
import android.content.res.Resources;
import android.util.Log;

import com.opensource.mors.R;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.lang.reflect.Field;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

public class FileUtils {

    public static void saveToFile(File file, String text){
        FileOutputStream stream = null;
        try {
            stream = new FileOutputStream(file);
            if(text != null) stream.write(text.getBytes());
        } catch (IOException e) {
            e.printStackTrace();
        }finally {
            if(stream != null){
                try {
                    stream.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }
    }
    public static String getWellFormattedDate(long time){
        Date date = new Date(time);
        DateFormat dateFormat = new SimpleDateFormat("dd/MM/yyyy hh:mm:ss");
        return dateFormat.format(date);
    }
    public static void loadRawJS(Context context){

        Resources resources = context.getResources();
        Field[] raws = R.raw.class.getFields();
        for (Field f : raws) {

            try {
                InputStream rawResource = resources.openRawResource(f.getInt(null));
                InputStreamReader resourceReader = new InputStreamReader(rawResource);
                BufferedReader buffReader = new BufferedReader(resourceReader);

                File directory = context.getFilesDir();
                String filename = directory + "/" + f.getName() + ".js";
                Log.d("RESOURCES", "saving R.raw." + f.getName() +" to " + filename);
                File outputFile = new File(filename);
                FileOutputStream stream = new FileOutputStream(outputFile);
                String str;
                while((str = buffReader.readLine())!= null){
                    stream.write((str+"\n").getBytes());
                }
                stream.close();
                buffReader.close();

            } catch (IllegalAccessException | IOException e) {
                e.printStackTrace();
            }
        }

    }
}
