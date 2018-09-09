import { FETCH_CRYPTO_NAMES } from '../actions/index';

export default function(state=[], action) {
    console.log(action.type);
    switch(action.type) {
        case FETCH_CRYPTO_NAMES:
            return [ action.payload, ...state ];
    }

    return state;
}