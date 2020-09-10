import React from 'react';
// import './App.css';
import Navbar from './components/navbar'
import Products from './components/products'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Footer from './components/footer';
import LogoFluid from './components/logoFluid';
import TopNav from './components/topNav';
import Dashboard from './components/Dashboard'
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <LogoFluid />
        <TopNav />
        <Dashboard/>
        <div class="all-content-wrapper">
          <Switch>
            <Route exact path="/products" component={Products} />
          </Switch>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
