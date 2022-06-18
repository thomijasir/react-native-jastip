import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const getSavedValue = (key: string, initialValue: any) => async () => {
  try {
    const savedValue = await AsyncStorage.getItem(key);
    if (savedValue) {
      return savedValue;
    }

    if (initialValue instanceof Function) {
      return initialValue();
    }
    return initialValue;
  } catch (e) {
    // error reading value
  }
};

export const storeValue = (key: string, setValue: any) => () => {
  AsyncStorage.setItem(key, setValue)
    .then(() => {
      console.log('Success Save');
    })
    .catch(() => {
      console.log('Failure Save');
    });
};

// Main Hooks
const useStorage = (key: string, initialValue: any) => {
  const [value, setValue] = useState(getSavedValue(key, initialValue));
  useEffect(storeValue(key, initialValue), [value]);
  return [value, setValue];
};

export default useStorage;

// Examples: https://reactnative.dev/docs/asyncstorage
