import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login';
import Nav from './components/Nav';
import Home from './pages/Home';
import Register from './pages/Register';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">      
    <BrowserRouter>
      <Nav/>

      <div className="auth-wrapper">
        <div className="auth-inner">
          <h2>You are not logged in.</h2>
        </div>
      </div>

      <main className="form-signin">
        
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />        
      </main>
    </BrowserRouter>    
  </div>
  );
}

export default App;
