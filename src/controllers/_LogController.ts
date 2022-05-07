import {Amplitude, Identify} from '@amplitude/react-native';
import crashlytics from '@react-native-firebase/crashlytics';

export const LOG = {
  onboarding_welcom: '',
};

export interface LogControllerReturnProps {
  init: () => void;
  log: (
    eventType: string,
    eventProperties?: Record<string, unknown> | undefined,
  ) => void;
  crash: (error: Error, jsErrorName?: string | undefined) => void;
}

function LogController(): LogControllerReturnProps {
  let ampInstance: Amplitude;

  return {
    init: () => {
      const API_KEY = '';
      const ampInstance = Amplitude.getInstance();
      ampInstance.init(API_KEY);
    },
    log: (eventType, eventProperties) => {
      if (ampInstance) {
        ampInstance.logEvent(eventType, eventProperties);
      } else {
        console.error('ERROR :: Not found amplitude instance');
      }
    },
    crash: (error, jsErrorName) => {
      crashlytics().recordError(error, jsErrorName);
    },
  };
}

export default LogController();
