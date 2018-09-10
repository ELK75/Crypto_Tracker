import _ from 'lodash';
import axios from 'axios';
import { API_KEY } from '../../app-env';

export const FETCH_CRYPTO_DATA = 'FETCH_CRYPTO_DATA';
export const FETCH_CRYPTO_NAMES = 'FETCH_CRYPTO_NAMES';

export function fetchCryptoData(cryptoName) {

  var request = "howdy part";

  return {
      type: FETCH_CRYPTO_DATA,
      payload: request
  }
}

export function fetchCryptoNames() {

  const request = axios.get('https://rest.coinapi.io/v1/symbols', {
      params: {
          apikey: API_KEY
      }
      }).then(function(response) {
          return response;
      }).catch(function(error) {
          return null;
  });

  return {
    type: FETCH_CRYPTO_NAMES,
    payload: request
  }
}