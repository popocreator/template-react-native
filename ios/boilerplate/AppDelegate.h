#import <React/RCTBridgeDelegate.h>
#import <UIKit/UIKit.h>

// react-native-push-notification
#import <UserNotifications/UNUserNotificationCenter.h>

// react-native-push-notification (UNUserNotificationCenterDelegate)
// Before :: @interface AppDelegate : UIResponder <UIApplicationDelegate, RCTBridgeDelegate>
@interface AppDelegate : UIResponder <UIApplicationDelegate, RCTBridgeDelegate, UNUserNotificationCenterDelegate>

@property (nonatomic, strong) UIWindow *window;

@end
