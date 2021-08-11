import React from 'react';
import './App.css';
import Chat from './Chat/Chat';
import Sidebar from './Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <Sidebar/>
      <Chat/>
    </div>
  );
}

export default App;
