package com.boilerplate.adapter

import android.view.View
import com.facebook.react.ReactPackage
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.uimanager.ReactShadowNode
import com.facebook.react.uimanager.ViewManager
//import java.util.*

class RNPackage : ReactPackage {
    override fun createNativeModules(reactContext: ReactApplicationContext): MutableList<NativeModule> {
        return mutableListOf(
                RNModule(reactContext)
        )
//        return Collections.emptyList();
    }

    override fun createViewManagers(reactContext: ReactApplicationContext):
            MutableList<ViewManager<out View, out ReactShadowNode<*>>> {
        return mutableListOf(
                RNViewManager()
        )
//        return Collections.emptyList();
    }
}