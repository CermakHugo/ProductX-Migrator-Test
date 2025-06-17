

package com.example.frontend.components;

import android.os.Bundle;
import android.app.Activity;
import android.util.Log;

public class BaseActivity extends Activity {

    private static final String TAG = BaseActivity.class.getSimpleName();

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        try {
            // Initialize activity's creation process
            initActivity(savedInstanceState);
        } catch (Exception e) {
            Log.e(TAG, "Error initializing activity", e);
        }
    }

    private void initActivity(Bundle savedInstanceState) {
        // Add additional initialization code here
    }
}