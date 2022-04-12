package com.boilerplate.lockscreen

import android.content.BroadcastReceiver
import android.content.Context
import android.content.Intent

class LockScreenReceiver: BroadcastReceiver() {
    override fun onReceive(context: Context, intent: Intent) {
        if(intent.action.equals(Intent.ACTION_SCREEN_OFF)) {
            var lockScreenIntent = Intent(context, LockScreenActivity::class.java)
            lockScreenIntent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK)
            context.startActivity(lockScreenIntent)
        }
    }
}