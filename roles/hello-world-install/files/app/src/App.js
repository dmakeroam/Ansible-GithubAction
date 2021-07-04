import React from 'react';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import History from './components/History/History';
import Countdown from './components/Countdown/Countdown';
import Wish from './components/Wish/Wish';
import Footer from './components/Footer/Footer';
import SnowStorm from 'react-snowstorm';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <SnowStorm 
          flakesMaxActive={50} 
          followMouse={false}
          flakeLeftOffset={100}
        />
        <Navbar/>
        <Hero/>
        <History/>
        <Countdown/>
        <Wish/>
        <Footer/>
      </div>
    );
  }
}

export default App;