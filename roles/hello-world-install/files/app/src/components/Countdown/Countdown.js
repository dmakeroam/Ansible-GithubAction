import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import Confetti from 'react-confetti'
import './Countdown.scss';

import CandyCane from '../../static/img/candycane.png';
import LigthWire from '../../static/img/lightwire.png';
import LightWireOn from '../../static/img/lightwire-on.gif'
import WaterDrop from '../../static/img/waterdrop.png';
import Santawhale1 from '../../static/img/santawhale1.png';

class Countdown extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			merryXmas: false,
			days: 0,
			hours: 0,
			minutes: 0,
			seconds: 0,
			fastTravel: false,
			toDate: null,
			winWidth: 1600,
			winHeight: 900
		}
		this.handleClick = this.handleClick.bind(this);
		this.handleResize = this.handleResize.bind(this);
	}
	

	componentDidMount() {
		this.tick = setInterval(() => {
			const xmas = this.state.fastTravel ? this.state.toDate : new Date(2020, 11, 25);
			const now = new Date().getTime();
			const distance = xmas - now;
			if (distance >= 0) {
				const days = Math.floor(distance / (1000 * 60 * 60 * 24)).toString().padStart(2, 0);
				const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, 0);
				const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, 0);
				const seconds = Math.floor((distance % (1000 * 60)) / 1000).toString().padStart(2, 0);
				this.setState({ days, hours, minutes, seconds });	
			} else {
				this.setState({ merryXmas: true });
			}
		}, 1000);
		window.addEventListener('resize', this.handleResize);
	}

	componentDidUpdate() {
		if (this.state.merryXmas) {
			clearInterval(this.tick);
		}
	}

	componentWillUnmount() {
		if (this.tick) {
			clearInterval(this.tick);
		}
	}

	handleClick() {
		this.setState({ fastTravel: true, toDate: new Date(Date.now() + 10000) })
	}

	handleResize() {
		this.setState({ winHeight: window.innerHeight, winWidth: window.innerWidth });
	}

	render() {
		const state = this.state;
		return (
			<section id="Countdown">
				{ state.merryXmas ? <Confetti
					width={state.winWidth}
					height={state.winHeight}
				/> : null }
				<div className="waterdrop">
					<img src={ WaterDrop } alt="Waterdrop 1"/>
					<img src={ WaterDrop } alt="Waterdrop 2"/>
					<img src={ WaterDrop } alt="Waterdrop 3"/>
				</div>
				<img className="santawhale1" src={ Santawhale1 } alt="Santawhale"/>
				<div className="Countdown__container">
					<ScrollAnimation animateIn="flash" animateOnce={true}>
						<h1>Countdown</h1>
					</ScrollAnimation>
					
					<div className="Countdown__box">
						<img id="candycane" src={ CandyCane } alt="Candy Cane" onClick={this.handleClick}/>
						<img id="lightwire" src={ state.merryXmas ? LightWireOn : LigthWire } alt="Light Wire" />
						<div className="Countdown__item">
							<div className="title">Days</div>
							<div className="timer" >{state.days}</div>
						</div>
						<div className="Countdown__item">
							<div className="title">Hours</div>
							<div className="timer" >{state.hours}</div>
						</div>
						<div className="Countdown__item">
							<div className="title">Minutes</div>
							<div className="timer" >{state.minutes}</div>
						</div>
						<div className="Countdown__item">
							<div className="title">Seconds</div>
							<div className="timer" >{state.seconds}</div>
						</div>
					</div>
				</div>
				{/* <img className="santawhale2" src={ Santawhale2 } alt="Santawhale"/> */}
				{/* ปลาวาฬว่ายออกขอบขวาแล้ว Overflow */}
			</section>
		);
	}
}

export default Countdown;