import Toast from 'react-native-simple-toast';
import AsyncStorage from '@react-native-async-storage/async-storage';
// Main Hooks
const useAsyncStorage = (key: string) => {
  const store = async (value: string) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (e) {
      Toast.show('Failure Save Storage');
    }
  };
  const remove = async () => {
    try {
      await AsyncStorage.removeItem(key);
    } catch (e) {
      Toast.show('Failure Save Storage');
    }
  };
  const get = async () => {
    try {
      const getData = await AsyncStorage.getItem(key);
      return Promise.resolve(getData);
    } catch (e) {
      Toast.show('Failure Save Storage');
    }
  };
  const clear = async () => {
    try {
      await AsyncStorage.clear();
    } catch (e) {
      Toast.show('Failure Clear Storage');
    }
  };
  return { store, remove, get, clear };
};

export default useAsyncStorage;
