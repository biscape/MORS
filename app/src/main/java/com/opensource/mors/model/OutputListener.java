package com.opensource.mors.model;

import android.app.Activity;
import android.content.Context;

import com.opensource.mors.FloatingWidgetService;


public interface OutputListener {
    Activity getActivity();
    void runOnUiThread(Runnable runnable);
    void invalidateOutput();
    void checkRequiredPermission();
    Context getApplicationContext();
    FloatingWidgetService getFloatingBubble();
}
