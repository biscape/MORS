package com.opensource.mors;

import android.content.DialogInterface;
import android.text.InputType;
import android.view.ContextThemeWrapper;
import android.widget.EditText;
import android.widget.LinearLayout;

import androidx.appcompat.app.AlertDialog;

import com.opensource.mors.model.OutputListener;
import com.opensource.mors.model.Script;

import java.util.HashMap;
import java.util.Map;

class DialogUtils {
    static void askParametersAndExecute(final Script script, final OutputListener outputListener) {
        AlertDialog.Builder builder = new AlertDialog.Builder(new ContextThemeWrapper(outputListener.getActivity(), R.style.myDialog)); //new AlertDialog.Builder(outputListener.getApplicationContext());
        builder.setTitle("Set parameters");

        LinearLayout layout = new LinearLayout(outputListener.getActivity());
        layout.setOrientation(LinearLayout.VERTICAL);
        // Set up the input
        final Map<String, EditText> paramEditText = new HashMap<>();
        for (String parameter: script.getParameters()){
            final EditText input = new EditText(outputListener.getActivity());
            input.setText(parameter);
            paramEditText.put(parameter, input);
            input.setInputType(InputType.TYPE_CLASS_TEXT);
            layout.addView(input);
            // Specify the type of input expected; this, for example, sets the input as a password, and will mask the text
        }
        builder.setView(layout);
        builder.setPositiveButton("OK", new DialogInterface.OnClickListener() {
            @Override
            public void onClick(DialogInterface dialog, int which) {
                Map<String, String> paramValues = new HashMap<>();
                for (String parameter : paramEditText.keySet()){
                    paramValues.put(parameter, paramEditText.get(parameter).getText().toString());
                }
                Script parametrized = script.cloneWithParameters(paramValues);
                parametrized.save();
                parametrized.execute(outputListener);
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
}
