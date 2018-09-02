import { FETCH_CRYPTO_DATA } from '../actions/index';

export default function(state=[], action) {
    switch(action.type) {
        case FETCH_CRYPTO_DATA:
            return [ ...state, action.payload ];
    }

    return state;
}