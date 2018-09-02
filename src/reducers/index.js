import { combineReducers } from 'redux';
import CryptoReducer from './reducer_crypto';

const rootReducer = combineReducers({
    cryptoData: CryptoReducer
});

export default rootReducer;