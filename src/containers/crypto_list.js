import React, { Component } from 'react';
import { connect } from 'react-redux';

import Graph from '../components/graph';

class CryptoList extends Component {

    renderCryptoData(cryptoData) {
        return (
            <Graph text={cryptoData} />
        );
    }

    render() {
        return this.props.cryptoData.map(this.renderCryptoData);
    }
}

function mapStateToProps({ cryptoData }) {
    return { cryptoData };
}

export default connect(mapStateToProps)(CryptoList);
