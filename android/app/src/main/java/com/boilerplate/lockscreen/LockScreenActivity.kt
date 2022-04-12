package com.boilerplate.lockscreen

import android.os.Bundle
import android.view.WindowManager
import com.boilerplate.R
import com.facebook.react.ReactActivity

class LockScreenActivity : ReactActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_lock_screen)
        window.addFlags(WindowManager.LayoutParams.FLAG_SHOW_WHEN_LOCKED)
        window.addFlags(WindowManager.LayoutParams.FLAG_DISMISS_KEYGUARD)
    }
}