import React from 'react';
import { Route } from 'react-router-dom';
import Main from 'pages/Main';
import 'styles/layout.css';
import 'styles/App.css';


function App() {
  return (
    <div className="App">
      <Route path="/" component={Main}/>
    </div>
  );
}

export default App;
