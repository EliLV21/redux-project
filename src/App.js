import './App.css';
import React from 'react';
import InputField from './Components/InputField/InputField';

class App extends React.Component {
  render () {
    return (
      <div>
        <h1>To do list</h1>
        <InputField/>
      </div>
    )
  }
}

export default App;
