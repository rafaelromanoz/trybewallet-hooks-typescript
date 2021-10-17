import { combineReducers } from 'redux';
import reducerLogin from './reducerLogin';
import reducerWallet from './reducerWallet';

const rootReducer = combineReducers({
  reducerLogin,
  reducerWallet,
});

export default rootReducer;
