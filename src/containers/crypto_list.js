import React, { Component } from 'react';
import { connect } from 'react-redux';

import Graph from '../components/graph';

class CryptoList extends Component {
    
    constructor() {
        super();

        this.colorList = ["blue", "orange", "red", "green", "purple", "black"];
    }

    renderCryptoData(cryptoData, index) {
        return (
            <Graph text={cryptoData.name} data={cryptoData.prices} key={cryptoData.symbol} color={this.colorList[index % this.colorList.length]} />
        );
    }

    render() {
        return this.props.cryptoData.map((cryptoData, index) => {
            return this.renderCryptoData(cryptoData, index);
        });
    }
}

function mapStateToProps({ cryptoData }) {
    return { cryptoData };
}

export default connect(mapStateToProps)(CryptoList);
