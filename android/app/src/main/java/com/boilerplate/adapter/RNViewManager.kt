package com.boilerplate.adapter

import com.facebook.react.ReactRootView
import com.facebook.react.uimanager.SimpleViewManager
import com.facebook.react.uimanager.ThemedReactContext
import com.facebook.react.uimanager.annotations.ReactProp

class RNViewManager : SimpleViewManager<RNView>() {
    override fun getName() = "RNView"

    override fun createViewInstance(reactContext: ThemedReactContext): RNView {
        TODO("Not yet implemented")
    }

    @ReactProp(name = "")
    fun setVideoId(view: ReactRootView, newId: String?) {}
}