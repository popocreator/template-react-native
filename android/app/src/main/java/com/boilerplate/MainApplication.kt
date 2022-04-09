package com.boilerplate

import android.app.Application
import android.content.Context
// import com.boilerplate.adapter.RNPackage
import com.facebook.react.*
import com.facebook.react.bridge.JSIModulePackage
import com.facebook.soloader.SoLoader
import com.swmansion.reanimated.ReanimatedJSIModulePackage
import java.lang.reflect.InvocationTargetException

// react-native-reanimated v2
class MainApplication : Application(), ReactApplication {
    private val mReactNativeHost: ReactNativeHost = object : ReactNativeHost(this) {
        override fun getUseDeveloperSupport(): Boolean {
            return BuildConfig.DEBUG
        }

        override fun getPackages(): List<ReactPackage> {
            val packages: MutableList<ReactPackage> = PackageList(this).packages
            // Packages that cannot be autolinked yet can be added manually here, for
            // example:
            // packages.add(new MyReactNativePackage());
            // packages.add(RNPackage())
            return packages
        }

        override fun getJSMainModuleName(): String {
            return "index"
        }

        // react-native-reanimated v2
        override fun getJSIModulePackage(): JSIModulePackage? {
            return ReanimatedJSIModulePackage()
        }
    }

    override fun getReactNativeHost(): ReactNativeHost {
        return mReactNativeHost
    }

    override fun onCreate() {
        super.onCreate()
        SoLoader.init(this,  /* native exopackage */false)
        initializeFlipper(this, reactNativeHost.reactInstanceManager)
    }

    companion object {
        /**
         * Loads Flipper in React Native templates. Call this in the onCreate method
         * with something like
         * initializeFlipper(this, getReactNativeHost().getReactInstanceManager());
         *
         * @param context
         * @param reactInstanceManager
         */
        private fun initializeFlipper(
                context: Context, reactInstanceManager: ReactInstanceManager) {
            if (BuildConfig.DEBUG) {
                try {
                    /*
         * We use reflection here to pick up the class that initializes Flipper,
         * since Flipper library is not available in release mode
         */
                    val aClass = Class.forName("com.boilerplate.ReactNativeFlipper")
                    aClass
                            .getMethod("initializeFlipper", Context::class.java, ReactInstanceManager::class.java)
                            .invoke(null, context, reactInstanceManager)
                } catch (e: ClassNotFoundException) {
                    e.printStackTrace()
                } catch (e: NoSuchMethodException) {
                    e.printStackTrace()
                } catch (e: IllegalAccessException) {
                    e.printStackTrace()
                } catch (e: InvocationTargetException) {
                    e.printStackTrace()
                }
            }
        }
    }
}