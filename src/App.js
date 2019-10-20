import React from 'react';
import './App.css';
import { Header } from './components';
import { PostContainers } from './containers'

function App() {
  return (
    <div className="App">
      <Header />
      <PostContainers />
    </div>
  );
}

export default App;
