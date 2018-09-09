import { combineReducers } from 'redux';
import CryptoReducer from './reducer_crypto';
import CryptoNameReducer from './reducer_crypto_names';

const rootReducer = combineReducers({
    cryptoData: CryptoReducer,
    cryptoNames: CryptoNameReducer
});

export default rootReducer;