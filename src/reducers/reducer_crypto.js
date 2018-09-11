import _ from 'lodash';
import { FETCH_CRYPTO_DATA } from '../actions/index';

function getRelevantData(nameData, pricingData) {
    var closingPrices = [];

    _.map(pricingData, (price) => {
        closingPrices.push(price.close);
    });
    
    return {
        name: nameData.name,
        symbol: nameData.symbol,
        prices: closingPrices
    };
}

export default function(state=[], action) {
    switch(action.type) {
        case FETCH_CRYPTO_DATA:
            if (typeof action.payload.data != "undefined") {
                return [ ...state, getRelevantData(action.meta, action.payload.data.Data) ];
            }
    }

    return state;
}