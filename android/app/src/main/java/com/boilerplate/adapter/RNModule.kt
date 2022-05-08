package com.boilerplate.adapter

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class RNModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
    override fun getName(): String {
        return "RNModule"
    }

    @ReactMethod
    public fun someMethod(someParameter: String) {
        // TODO What you want to do
    }
}