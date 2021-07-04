import React from 'react';
import FlipCard from '../FlipCard/FlipCard';
import ScrollAnimation from 'react-animate-on-scroll';
import './History.scss';

import C1 from '../../static/img/cards/c1_frontreal-01.jpg';
import C2 from '../../static/img/cards/c2_frontreal-01.jpg';
import C3 from '../../static/img/cards/c3_frontreal-01.jpg';
import C4 from '../../static/img/cards/c4_frontreal-01.jpg';

import C1Back from '../../static/img/cards/c1_backreal.jpg';
import C2Back from '../../static/img/cards/c2_backreal.jpg';
import C3Back from '../../static/img/cards/c3_backreal.jpg';
import C4Back from '../../static/img/cards/c4_backreal.jpg';

import WaterDrop from '../../static/img/waterdrop.png';

class HistorySection extends React.Component {
  render() {
    return (
      <section id="History">
        <div className="waterdrop">
					<img src={ WaterDrop } alt="Waterdrop 1"/>
					<img src={ WaterDrop } alt="Waterdrop 2"/>
				</div>
        <div className="History__container">
          <h1>History of Christmas</h1>
          <p>Christmas is celebrated on December 25 and is both a sacred 
            religious holiday and a worldwide cultural and commercial 
            phenomenon. For two millennia, people around the world have 
            been observing it with traditions and practices that are both 
            religious and secular in nature. Christians celebrate Christmas
            Day as the anniversary of the birth of Jesus of Nazareth,
            a spiritual leader whose teachings form the basis of their religion.
            Popular customs include exchanging gifts, decorating Christmas 
            trees, attending church, sharing meals with family and friends 
            and, of course, waiting for Santa Claus to arrive. December 25–
            Christmas Day–has been a federal holiday in the United States 
            since 1870.
          </p>
          <ScrollAnimation animateIn="bounceIn" animateOnce={true} duration={2}>
            <div className="History__gallery">
              <FlipCard imgFront={ C1 } imgBack={ C1Back }/>
              <FlipCard imgFront={ C2 } imgBack={ C2Back }/>
              <FlipCard imgFront={ C3 } imgBack={ C3Back }/>
              <FlipCard imgFront={ C4 } imgBack={ C4Back }/>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    );
  }
}

export default HistorySection;