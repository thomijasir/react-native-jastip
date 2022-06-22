import { APP_CONTEXT } from '../constants';

export interface IAppContext {
  loadingState: any;
  errorState: any;
  carts: any;
  profile: any;
}

// INITIAL STATE
export const initialState: any = {
  loadingState: {
    isLoading: true,
    text: 'Loading...',
  },
  errorState: {
    isError: false,
    title: 'Something Wrong!',
    message:
      'Opps, please check app configuration or service that might cause this error.',
  },
  carts: [],
  profile: {},
};

// export const makeInitialState = (): IAppContext => {
//   const getStorageContext = localStorage.getItem(APP_CONTEXT);
//   if (getStorageContext) {
//     return JSON.parse(getStorageContext);
//   }
//   return initialState;
// };

// TYPE ACTION
export const SET_LOADING = 'SET_LOADING';
export const SET_ERROR = 'SET_ERROR';
export const SET_CARTS = 'SET_CARTS';
export const SET_PROFILE = 'SET_PROFILE';

// REDUCERS
export default (state: IAppContext, action: any) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loadingState: action.payload,
      };
    case SET_ERROR:
      return {
        ...state,
        errorState: action.payload,
      };
    case SET_CARTS:
      return {
        ...state,
        carts: action.payload,
      };
    case SET_PROFILE:
      return {
        ...state,
        profile: action.payload,
      };
    default:
      return state;
  }
};
