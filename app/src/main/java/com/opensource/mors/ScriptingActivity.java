package com.opensource.mors;

import android.Manifest;
import android.app.Activity;
import android.content.Context;
import android.content.DialogInterface;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.os.Bundle;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.AdapterView;
import android.widget.BaseAdapter;
import android.widget.EditText;
import android.widget.ImageView;
import android.widget.ListView;
import android.widget.TabHost;
import android.widget.TextView;
import android.widget.Toast;

import androidx.appcompat.app.AlertDialog;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.app.ActivityCompat;
import androidx.core.content.ContextCompat;

import com.google.android.material.floatingactionbutton.FloatingActionButton;
import com.opensource.mors.model.Output;
import com.opensource.mors.model.OutputListener;
import com.opensource.mors.model.Script;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

public class ScriptingActivity extends AppCompatActivity implements OutputListener {

    EditText scriptEditText;
    Script script;
    private static final int REQUEST_CODE_PERMISSION = 1;
    OutputAdapter adapter;
    ListView outputListView;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_scripting);
        FloatingActionButton goBackButton = findViewById(R.id.faback);
        goBackButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                goToMainActivity(false);
            }
        });
        FloatingActionButton saveButton = findViewById(R.id.fasave);
        saveButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                save();
            }
        });
        FloatingActionButton executeButton = findViewById(R.id.faexec);
        final ScriptingActivity activity = this;
        executeButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                if(!script.isParametrized()) {
                    script.execute(activity);
                    Toast.makeText(getApplicationContext(), "Executing " + script.getName(), Toast.LENGTH_LONG).show();
                }else{
                    DialogUtils.askParametersAndExecute(script, activity);
                    refreshOutputs();
                }
            }
        });
        TabHost tabHost = (TabHost)findViewById(android.R.id.tabhost);
        tabHost.setup();
        TabHost.TabSpec tab1 = tabHost.newTabSpec("Code");
        TabHost.TabSpec tab2 = tabHost.newTabSpec("Outputs");

        tab1.setIndicator("Code");
        tab1.setContent(R.id.tab1);

        tab2.setIndicator("Outputs");
        tab2.setContent(R.id.tab2);


        tabHost.addTab(tab1);
        tabHost.addTab(tab2);
        scriptEditText = (EditText) findViewById(R.id.scriptEditText);

        Bundle extras = getIntent().getExtras();
        if (extras == null) {
            return;
        }
        // get data via the key
        String pathname = "";
        String filename = extras.getString("filename");
        if (filename != null) {
            scriptEditText.setText("file path not found");
        }
        String filepath = extras.getString("filepath");
        if (filepath != null) {
            scriptEditText.setText("file path not found");
        }
        pathname = filepath + (filepath.endsWith("/")?"":"/") + filename;
        File file = new File(pathname);
        script = new Script(file);
        scriptEditText.setText(script.getCode());
        checkRequiredPermission();
        adapter = new OutputAdapter(this, R.layout.output_list_adapter);
        outputListView = (ListView) findViewById(R.id.outputlistview);
        outputListView.setAdapter(adapter);
        outputListView.setOnItemLongClickListener(new AdapterView.OnItemLongClickListener() {
            @Override
            public boolean onItemLongClick(AdapterView<?> parent, View view, final int position, long id) {
                AlertDialog.Builder builder = new AlertDialog.Builder(activity);
                builder.setTitle("Stop the script?");

                builder.setPositiveButton("OK", new DialogInterface.OnClickListener() {
                    @Override
                    public void onClick(DialogInterface dialog, int which) {
                        adapter.getItem(position).stop();
                        refreshOutputs();
                    }
                });
                builder.setNegativeButton("Cancel", new DialogInterface.OnClickListener() {
                    @Override
                    public void onClick(DialogInterface dialog, int which) {
                        dialog.cancel();
                    }
                });

                builder.show();
                return true;
            }
        });
        refreshOutputs();
        outputListView.setOnItemClickListener(new AdapterView.OnItemClickListener() {
            @Override
            public void onItemClick(AdapterView<?> parent, View view, int position, long id) {
                Output output = adapter.getItem(position);
                startOutputActivity(output);
            }
        });

    }
    public void refreshOutputs() {
        adapter.clear();
        adapter.setOutputs(script.getOutputs());
    }

    public void save(){
        Log.d("Scripting","saving the code");
        script.setCode(scriptEditText.getText().toString());
        script.save();
        Log.d("Scripting","saved the code");

    }

    public void startOutputActivity(Output output){
        Intent intent = new Intent(this, OutputActivity.class);
        intent.putExtra("filepath", output.getName());
        intent.putExtra("scriptname", output.getScriptName());
        startActivity(intent);
    }
    public void goToMainActivity(boolean save){
        Intent intent = new Intent(this, MainActivity.class);
        startActivity(intent);
    }
    private static boolean canWriteToExternalStorage(Context context) {
        return ContextCompat.checkSelfPermission(context, Manifest.permission.WRITE_EXTERNAL_STORAGE) == PackageManager.PERMISSION_GRANTED;
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
        refreshOutputs();
    }

    @Override
    public void checkRequiredPermission() {
        if (ContextCompat.checkSelfPermission(this, Manifest.permission.WRITE_EXTERNAL_STORAGE) != PackageManager.PERMISSION_GRANTED) {
            if (ActivityCompat.shouldShowRequestPermissionRationale(this, Manifest.permission.WRITE_EXTERNAL_STORAGE)) {
                // permission wasn't granted
            } else {
                ActivityCompat.requestPermissions(this, new String[]{Manifest.permission.WRITE_EXTERNAL_STORAGE}, REQUEST_CODE_PERMISSION);
            }
        }
    }

    @Override
    public FloatingWidgetService getFloatingBubble() {
        return null;
    }

    private class OutputAdapter extends BaseAdapter {

        List<Output> scriptOutputs = new ArrayList<>();
        int resourceId;
        Context context;

        public OutputAdapter(Context context, int textViewResourceId){
            this.resourceId = textViewResourceId;
            this.context = context;
        }

        @Override
        public int getCount() {
            return scriptOutputs.size();
        }

        @Override
        public Output getItem(int position) {
            return scriptOutputs.get(position);
        }

        @Override
        public long getItemId(int position) {
            return position;
        }

        @Override
        public View getView(int position, View convertView, ViewGroup parent) {
            convertView = LayoutInflater.from(context).inflate(resourceId, parent,false);//set layout for displaying items
            TextView outputFileName = (TextView) convertView.findViewById(R.id.outputfilename);
            TextView outputTextView = (TextView) convertView.findViewById(R.id.outputtextview);
            TextView outputStatusTextView = (TextView) convertView.findViewById(R.id.outputstatustext);
            ImageView icon = (ImageView) convertView.findViewById(R.id.outputstatusicon);//get id for image view
            Output output = scriptOutputs.get(position);
            outputFileName.setText(output.getName());
            outputTextView.setText(output.getOutput());
            outputStatusTextView.setText(output.getStatus());
            if (output.isExecuted()){
                icon.setImageResource(android.R.drawable.star_on);
            }else{
                icon.setImageResource(android.R.drawable.star_off);
            }
            return convertView;
        }
        public void clear(){
            this.scriptOutputs.clear();
        }

        public void setOutputs(List<Output> outputs) {
            this.scriptOutputs.addAll(outputs);
        }
    }
}
