

import android from 'android';

class IntentHelper {
    onNewIntent(intent, preferences) {
        if (intent !== null) {
            const extras = intent.getExtras();
            if (extras !== null) {
                for (const key in extras) {
                    if (extras.hasOwnProperty(key)) {
                        const value = extras[key];
                        if (value !== null) {
                            if (preferences !== null) {
                                preferences.putString(key, value.toString());
                            }
                        }
                    }
                }
            }
        }
    }
}

export default IntentHelper;