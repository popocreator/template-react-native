package com.boilerplate;

import com.facebook.react.ReactActivity;
import android.os.Bundle;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is
   * used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "boilerplate";
  }

  // react-navigation v6
  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(null);
  }

  @Override
  public int checkPermission(String permission, int pid, int uid) {
    return 0;
  }

  @Override
  public int checkSelfPermission(String permission) {
    return 0;
  }

  @Override
  public boolean shouldShowRequestPermissionRationale(String permission) {
    return false;
  }
}
