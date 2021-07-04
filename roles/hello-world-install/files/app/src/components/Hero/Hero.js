import React from 'react';
import './Hero.scss';

class HeroSection extends React.Component {
  render() {
    return (
      <section id="Hero">
        <div className="Hero__container">
          <h1>Merry Christmas</h1>
          <p>let's countdown with us under the sea.</p>
        </div>
      </section>
    );
  }
}

export default HeroSection;