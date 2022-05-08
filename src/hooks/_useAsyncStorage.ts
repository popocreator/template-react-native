import {useCallback} from 'react';
import {AsyncStorageController} from '../controllers';

export default function _useToast() {
  const saveToStorage = useCallback((key: string, value: string) => {
    AsyncStorageController.store(key, value);
  }, []);

  const saveObjectToStorage = useCallback((key: string, value: object) => {
    AsyncStorageController.storeObject(key, value);
  }, []);

  const loadFromStorage = useCallback((key: string) => {
    AsyncStorageController.load(key);
  }, []);

  const loadObjectFromStorage = useCallback(<T>(key: string) => {
    AsyncStorageController.loadObject(key);
  }, []);

  return {
    saveToStorage,
    saveObjectToStorage,
    loadFromStorage,
    loadObjectFromStorage,
  };
}
