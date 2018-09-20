import React, { Component } from 'react';
import '../css/App.css';
import Search from './search';
import Photolist from './photolist';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ul>
            <li>Search user</li>
            <li>Seach images</li>
            <li>Save Contacts  </li>
            <li>Add to do</li>
          </ul>
        </header>
          <br/>
          <br/>
          <Search/>
          <br/>
          <Photolist/>
        </div>
    );
  }
}

export default App;
