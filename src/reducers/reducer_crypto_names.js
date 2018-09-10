import { FETCH_CRYPTO_NAMES } from '../actions/index';

export default function(state=[], action) {
    switch(action.type) {
        case FETCH_CRYPTO_NAMES:
            console.log(action.payload.data + "reducer");
            return [ ...action.payload.data ];
    }

    return state;
}