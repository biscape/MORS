package com.opensource.mors;

import androidx.appcompat.app.AlertDialog;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.app.ActivityCompat;
import androidx.core.content.ContextCompat;

import android.Manifest;
import android.app.Activity;
import android.app.ActivityManager;
import android.content.ComponentName;
import android.content.Context;
import android.content.DialogInterface;
import android.content.Intent;
import android.content.ServiceConnection;
import android.content.pm.PackageManager;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.os.IBinder;
import android.provider.Settings;
import android.text.InputType;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.AdapterView;
import android.widget.BaseAdapter;
import android.widget.EditText;
import android.widget.ListView;
import android.widget.Spinner;
import android.widget.TextView;
import android.widget.Toast;

import com.google.android.material.floatingactionbutton.FloatingActionButton;
import com.opensource.mors.model.FileUtils;
import com.opensource.mors.model.OutputListener;
import com.opensource.mors.model.Script;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

public class MainActivity extends AppCompatActivity implements OutputListener {

    ListView scriptsListView;
    ScriptListAdapter adapter;
    private static final int REQUEST_CODE_PERMISSION = 1;
    private static final int DRAW_OVER_OTHER_APP_PERMISSION = 123;



    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        checkRequiredPermission();
        FileUtils.loadRawJS(this);
        adapter = new ScriptListAdapter(this, R.layout.script_adapter);
        scriptsListView = (ListView) findViewById(R.id.scriptlistview);
        scriptsListView.setAdapter(adapter);
        final MainActivity activity = this;


        scriptsListView.setOnItemClickListener(new AdapterView.OnItemClickListener() {
            @Override
            public void onItemClick(AdapterView<?> parent, View view, int position, long id) {

                Script script = (Script) adapter.getItem(position);
                startScriptingActivity(script);
            }
        });
        scriptsListView.setOnItemLongClickListener(new AdapterView.OnItemLongClickListener() {
            @Override
            public boolean onItemLongClick(AdapterView<?> parent, View view, int position, long id) {
                Script script = (Script) adapter.getItem(position);
                if(!script.isParametrized()) {
                    script.execute(activity);
                    Toast.makeText(getApplicationContext(), "Executing " + script.getName(), Toast.LENGTH_LONG).show();
                }else{
                    DialogUtils.askParametersAndExecute(script, activity);
                    refreshFiles();
                }
                return true;

            }
        });


        FloatingActionButton addButton = findViewById(R.id.faplus);
        addButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
//                ActivityManager activityManager = getActivityManager(activity);
//                List<ActivityManager.RunningServiceInfo> runningServices = activityManager.getRunningServices(10);
//                int i = 0;
//                for (ActivityManager.RunningServiceInfo runningService : runningServices) {
//                    i++;
//                    runningService.service.
//                    ComponentName service = runningService.service;
//                    Log.d("HEY", service.getClassName() + " " + i);
//                }
                AlertDialog.Builder builder = new AlertDialog.Builder(activity);
                builder.setTitle("Filename");
                // Set up the input
                final EditText input = new EditText(activity);
                input.setText("example.js");

                // Specify the type of input expected; this, for example, sets the input as a password, and will mask the text
                input.setInputType(InputType.TYPE_CLASS_TEXT);
                builder.setView(input);

                builder.setPositiveButton("OK", new DialogInterface.OnClickListener() {
                    @Override
                    public void onClick(DialogInterface dialog, int which) {
                        createScript(input.getText().toString());
                    }
                });
                builder.setNegativeButton("Cancel", new DialogInterface.OnClickListener() {
                    @Override
                    public void onClick(DialogInterface dialog, int which) {
                        dialog.cancel();
                    }
                });

                builder.show();
            }
        });

        refreshFiles();

    }
    public static ActivityManager getActivityManager(Context context)
    {
        ActivityManager result = (ActivityManager)context.getSystemService(Context.ACTIVITY_SERVICE);
        if (result == null)
            throw new UnsupportedOperationException("Could not retrieve ActivityManager");
        return result;
    }

    @Override
    protected void onPause() {
        super.onPause();


    }



    public void createScript(String filename){
        File directory = getApplicationContext().getFilesDir();
        File newfile = new File(directory.toString() + "/" + filename);
        if (!newfile.exists()){
            try {
                newfile.createNewFile();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        refreshFiles();
    }

    public void startScriptingActivity(Script script){
        Intent intent = new Intent(this, ScriptingActivity.class);
        intent.putExtra("filename", script.getName());
        intent.putExtra("filepath", script.getPath());
        startActivity(intent);
    }

    public void refreshFiles() {
        adapter.clear();
        File directory = getApplicationContext().getFilesDir();
        Log.d("filesdir", directory.getAbsolutePath());
        File fileList[] = directory.listFiles();
        for (int i = 0; i < fileList.length; ++i) {
            String filename = fileList[i].toString();
            if (filename.endsWith(".js")) {
                adapter.addScript(fileList[i]);
            }
        }
    }

    public ScriptListAdapter getAdapter(){
        return adapter;
    }

    public ListView getScriptsListView() {
        return this.scriptsListView;
    }

    @Override
    public void onRequestPermissionsResult(int requestCode, String[] permissions, int[] grantResults) {
        if (requestCode == REQUEST_CODE_PERMISSION) {
            if (grantResults.length >= 0 && grantResults[0] == PackageManager.PERMISSION_GRANTED) {
                // permission was granted
            } else {
                // permission wasn't granted
            }
        }
    }

    @Override
    public Activity getActivity() {
        return this;
    }

    @Override
    public void invalidateOutput() {
        getScriptsListView().invalidateViews();
    }

    public void checkRequiredPermission() {
        if (ContextCompat.checkSelfPermission(this, Manifest.permission.WRITE_EXTERNAL_STORAGE) != PackageManager.PERMISSION_GRANTED) {
            if (ActivityCompat.shouldShowRequestPermissionRationale(this, Manifest.permission.WRITE_EXTERNAL_STORAGE)) {
                // permission wasn't granted
            } else {
                ActivityCompat.requestPermissions(this, new String[]{Manifest.permission.WRITE_EXTERNAL_STORAGE, Manifest.permission.READ_EXTERNAL_STORAGE}, REQUEST_CODE_PERMISSION);
            }
        }
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M && !Settings.canDrawOverlays(this)) {

            //If the draw over permission is not available to open the settings screen
            //to grant the permission.
            Intent intent = new Intent(Settings.ACTION_MANAGE_OVERLAY_PERMISSION,
                    Uri.parse("package:" + getPackageName()));
            startActivityForResult(intent, DRAW_OVER_OTHER_APP_PERMISSION);
        }

    }

    @Override
    public FloatingWidgetService getFloatingBubble() {
        return null;
    }

    private class ScriptListAdapter extends BaseAdapter {

        List<Script> javaScripts = new ArrayList<>();
        int resourceId;
        Spinner spinner;
        Context context;

        public ScriptListAdapter(Context context, int textViewResourceId){
            this.resourceId = textViewResourceId;
            this.context = context;
        }

        public void addScript(File filename){
            javaScripts.add(new Script(filename));
        }
        @Override
        public int getCount() {
            return javaScripts.size();
        }

        @Override
        public Object getItem(int position) {
            return javaScripts.get(position);
        }

        @Override
        public long getItemId(int position) {
            return position;
        }

        @Override
        public View getView(int position, View convertView, ViewGroup parent) {
            convertView = LayoutInflater.from(context).inflate(resourceId, parent,false);//set layout for displaying items
            TextView scriptName = (TextView) convertView.findViewById(R.id.scriptname);
            TextView scriptDescription = (TextView) convertView.findViewById(R.id.scriptdescription);
            scriptName.setText(javaScripts.get(position).getName());
            scriptDescription.setText(javaScripts.get(position).getDescription());
            return convertView;
        }

        public void clear() {
            this.javaScripts.clear();
        }

        public Spinner getSpinner() {
            return spinner;
        }
    }

}