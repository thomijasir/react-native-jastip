import Toast from 'react-native-simple-toast';
import uuid from 'react-native-uuid';
import base64 from 'react-native-base64';
// Main Hooks
const useApi = () => {
  const BASE_URL = 'http://128.199.173.168:8080/api/v1/';
  const AMPERA_URL = 'https://stag-ampera.innov8.id/v1/';

  const bindingInit = async (phone: string) => {
    try {
      const params = {
        phoneNumber: phone,
      };
      const request = await fetch(AMPERA_URL + 'binding/init', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'X-Ampera-Client': 'Aurum',
        },
        body: JSON.stringify(params),
      });
      const responses = await request.json();
      const {
        data: { bindingInitUrl },
      } = responses;
      const paramSeamless = JSON.stringify({ mobile: phone });
      const addSeamless = `${bindingInitUrl}&seamlessData=${encodeURIComponent(
        paramSeamless,
      )}&seamlessSign=${encodeURIComponent(base64.encode(paramSeamless))}`;
      return Promise.resolve(bindingInitUrl);
    } catch (error) {
      Toast.show('Failure InitBinding!');
    }
  };

  const accountBind = async (authCode: string) => {
    try {
      const request = await fetch(AMPERA_URL + 'binding/finish', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'X-Ampera-Client': 'Aurum',
        },
        body: authCode,
      });
      const responses = await request.json();
      const { data } = responses;
      return Promise.resolve(data);
    } catch (e) {
      Toast.show('Failure AccountBind!');
    }
  };

  const queryProfile = async (id: string) => {
    try {
      const request = await fetch(AMPERA_URL + 'dana/profile', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'X-Ampera-Client': 'Aurum',
          'X-Dana-Binding-Id': id,
        },
        body: JSON.stringify({
          userResources: [
            'BALANCE',
            'USER_KYC',
            'FULLNAME',
            'KTP_NUMBER',
            'MASK_DANA_ID',
          ],
        }),
      });
      const responses = await request.json();
      const { userResourceInfos } = responses.data;
      const profile: any = {};
      for (let i = 0; i < userResourceInfos.length; i += 1) {
        const item = userResourceInfos[i];
        profile[item.resourceType] = item.value;
      }
      return Promise.resolve(profile);
    } catch (error) {
      Toast.show('Failure QueryProfile!');
    }
  };

  const getProfile = async (authCode: string) => {
    try {
      const bind = await accountBind(authCode);
      const profile = await queryProfile(bind.id);
      return Promise.resolve(profile);
    } catch (error) {
      Toast.show('Failure Get Profile!');
    }
  };

  const getProducts = async () => {
    try {
      const request = await fetch(BASE_URL + 'products/popular', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      const responses = await request.json();
      return Promise.resolve(responses);
    } catch (error) {
      Toast.show('Failure Get Products!');
    }
  };

  const getProductsByCountries = async (value: string) => {
    try {
      const request = await fetch(BASE_URL + `products/country/${value}`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      const responses = await request.json();
      return Promise.resolve(responses);
    } catch (error) {
      Toast.show('Failure Get Products!');
    }
  };

  const getProductsNewest = async () => {
    try {
      const request = await fetch(BASE_URL + 'products/newest', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      const responses = await request.json();
      return Promise.resolve(responses);
    } catch (error) {
      Toast.show('Failure Get Products!');
    }
  };

  const getProductDetail = async (id: string) => {
    try {
      const request = await fetch(BASE_URL + `products/${id}`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      const responses = await request.json();
      return Promise.resolve(responses);
    } catch (error) {
      Toast.show('Failure Get Products Detail!');
    }
  };

  const getFeeds = async () => {
    try {
      const request = await fetch(BASE_URL + 'feed', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      const responses = await request.json();
      return Promise.resolve(responses);
    } catch (error) {
      Toast.show('Failure Get Feeds');
    }
  };

  return {
    bindingInit,
    accountBind,
    queryProfile,
    getFeeds,
    getProfile,
    getProducts,
    getProductDetail,
    getProductsNewest,
    getProductsByCountries,
  };
};

export default useApi;
