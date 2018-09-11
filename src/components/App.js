import React, { Component } from 'react';

import CryptoList from '../containers/crypto_list';
import SearchBar from '../containers/search_bar';

class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <div className="row u-margin-top-sm">
          <CryptoList />
        </div>
      </div>
    );
  }
}

export default App;
