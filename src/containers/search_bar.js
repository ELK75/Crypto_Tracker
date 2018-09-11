import _ from 'lodash';
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCryptoData, fetchCryptoNames } from '../actions/index';
import Select from 'react-select';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { selectedOption: null };
    }

    componentDidMount() {
        this.props.fetchCryptoNames();
    }

    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
        this.props.fetchCryptoData({
            symbol: selectedOption.value,
            name: selectedOption.label
        });
    }

    render() {
        const { selectedOption } = this.state;
        
        return (
            <Select
                value={selectedOption}
                onChange={this.handleChange}
                options={this.props.cryptoNames}
                onSubmit={this.handleOnSubmit}
            />
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchCryptoData, fetchCryptoNames }, dispatch);
}

function mapStateToProps({ cryptoNames }) {
    return { cryptoNames };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);