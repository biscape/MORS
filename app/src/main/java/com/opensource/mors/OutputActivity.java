package com.opensource.mors;

import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.EditText;

import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;

import com.google.android.material.floatingactionbutton.FloatingActionButton;
import com.opensource.mors.model.Output;

import java.io.File;

public class OutputActivity extends AppCompatActivity {
    private Output output;
    EditText outputEditText;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_output);
        Toolbar toolbar = findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);
        FloatingActionButton goBackButton = findViewById(R.id.fabackscript);
        outputEditText = (EditText) findViewById(R.id.outputEditText);

        goBackButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                goToScriptActivity(false);
            }
        });
        Bundle extras = getIntent().getExtras();
        if (extras == null) {
            return;
        }
        // get data via the key
        String pathname = "";
        String filepath = extras.getString("filepath");
        String scriptname = extras.getString("scriptname");
        outputEditText.setText("file path not found");
        if (filepath == null){
            return;
        }
        if(scriptname == null){
            return;
        }
        File file = new File(filepath);
        output = new Output(file, scriptname);
        refreshOutput();
    }

    private void refreshOutput() {
        outputEditText.setText(output.getOutput());
    }


    private void goToScriptActivity(boolean b) {
        Intent intent = new Intent(this, ScriptingActivity.class);
        String scriptname = output.getScriptName();
        String scriptpath = output.getName().substring(0, output.getName().lastIndexOf("/"));
        Log.d("INTENTING","sn: " + output.getScriptName() + "  -  " + scriptname + "  -  " + output.getName() + "  -  " + scriptpath);

        intent.putExtra("filename", scriptname);
        intent.putExtra("filepath", scriptpath);
        startActivity(intent);
    }

}
