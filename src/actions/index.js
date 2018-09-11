import _ from 'lodash';
import axios from 'axios';
import { API_KEY } from '../../app-env';

export const FETCH_CRYPTO_DATA = 'FETCH_CRYPTO_DATA';
export const FETCH_CRYPTO_NAMES = 'FETCH_CRYPTO_NAMES';

export function fetchCryptoData(cryptoData) {

  const request = axios.get(`https://min-api.cryptocompare.com/data/histohour?fsym=${cryptoData.symbol}&tsym=USD&limit=168`)
    .then(function(response) {
        return response;
    }).catch(function(error) {
        return null;
    });

  return {
      type: FETCH_CRYPTO_DATA,
      payload: request,
      meta: {
        name: cryptoData.name,
        symbol: cryptoData.symbol,
        request
      }
  }
}

export function fetchCryptoNames() {

  const request = axios.get('https://min-api.cryptocompare.com/data/all/coinlist')
    .then(function(response) {
        return response;
    }).catch(function(error) {
        return null;
  });

  return {
    type: FETCH_CRYPTO_NAMES,
    payload: request
  }
}