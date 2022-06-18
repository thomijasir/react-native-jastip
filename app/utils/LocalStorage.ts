import AsyncStorage from '@react-native-async-storage/async-storage';

export const setLocalValue = async (key: string, value: any) => {
	try {
		await AsyncStorage.setItem(key, value);
	} catch (e) {
		console.log(e);
	}
};

export const getLocalValue = async (key: string, action?: Function) => {
	try {
		const value = await AsyncStorage.getItem(key);
		if (value !== null && action) {
			action(value);
		}
		return value;
	} catch (e) {
		console.log(e);
	}
};

export const removeLocalValue = async (key: string) => {
	try {
		await AsyncStorage.removeItem(key);
		return true;
	}
	catch(exception) {
		return false;
	}
}

export const removeAllLocalValue = async () => {
	AsyncStorage.getAllKeys()
		.then(async keys => {
			await AsyncStorage.multiRemove(keys);
		})
		.then(() => { return });
};
