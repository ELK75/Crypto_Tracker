import _ from 'lodash';
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCryptoData, fetchCryptoNames } from '../actions/index';
import { InputAutocomplete } from 'input-autocomplete'

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { term: '' };

        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    componentWillMount() {
        this.props.fetchCryptoNames();
    }

    onInputChange(event) {
        this.setState({ term: event.target.value.toLowerCase() });
    }

    onFormSubmit(event) {
        event.preventDefault();
        
        this.props.fetchCryptoData(this.state.term);
        this.setState({ term: '' });
    }

    render() {
        var cryptoNameList = []
        this.props.cryptoNames.map((crypto) => {
            cryptoNameList.push(crypto.exchange_id.toLowerCase());
        });

        return (
            <form onSubmit={this.onFormSubmit} className="input-group container">
                <InputAutocomplete
                      type='text'
                      autocompleteValues={[...cryptoNameList]}
                      value={this.state.name}
                      onChange={this.onInputChange}
                      onSubmit={this.onFormSubmit}
                      className="form-control"
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </span>
            </form>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchCryptoData, fetchCryptoNames }, dispatch);
}

function mapStateToProps({ cryptoNames }) {
    return { cryptoNames };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);