import React, { Component } from 'react';

import './App.css';
import Counter from './components/Counter';
import PaletteContainer from './containers/PaletteContainer';
import WaitingList from './components/WaitingList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PaletteContainer />
        <Counter value={0} color="red" />
        <WaitingList />
      </div>
    );
  }
}

export default App;
