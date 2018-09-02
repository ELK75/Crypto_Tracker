import axios from 'axios';

import { API_KEY } from '../../app-env';


export const FETCH_CRYPTO_DATA = 'FETCH_CRYPTO_DATA';

export function fetchCryptoData(cryptoName) {
    console.log(API_KEY);
    const request = "oh hi mark";

    return {
        type: FETCH_CRYPTO_DATA,
        payload: cryptoName
    }
}