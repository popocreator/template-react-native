import AsyncStorage from '@react-native-async-storage/async-storage';

export interface AsyncStorageControllerReturnProps {
  store: (key: string, value: string) => void;
  storeObject: (key: string, value: object) => void;
  load: (key: string) => void;
  loadObject: <T>(key: string) => Promise<T | undefined>;
}

function AsyncStorageController(): AsyncStorageControllerReturnProps {
  const store = async (key: string, value: string) => {
    await AsyncStorage.setItem(key, value);
  };

  const storeObject = async (key: string, value: object) => {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  };

  const load = async (key: string) => {
    const storedValue = await AsyncStorage.getItem(key);
    return storedValue;
  };

  const loadObject = async <T>(key: string) => {
    const storedValue = await AsyncStorage.getItem(key);
    let jsonValue: T;
    try {
      jsonValue = storedValue ? JSON.parse(storedValue) : null;
      return jsonValue;
    } catch (error) {
      console.log(error);
    }
  };

  return {
    store,
    storeObject,
    load,
    loadObject,
  };
}

export default AsyncStorageController();
