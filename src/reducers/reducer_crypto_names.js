import _ from 'lodash';
import { FETCH_CRYPTO_NAMES } from '../actions/index';

function getCryptoNames(cryptoData) {
    var cryptoNames = [];

    _.map(cryptoData, (coin) => {
        const coinSymbol = coin.Symbol;
        const coinName = coin.CoinName;
        cryptoNames.push({
            value: coinSymbol,
            label: coinName
        });
    });

    return cryptoNames;
}

export default function(state=[], action) {
    switch(action.type) {
        case FETCH_CRYPTO_NAMES:
            if (typeof action.payload.data != "undefined") {
                return getCryptoNames(action.payload.data.Data);
            }
    }

    return state;
}