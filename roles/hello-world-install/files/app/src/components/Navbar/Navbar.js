import React from 'react'
import Scrollspy from 'react-scrollspy';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import HamburgerMenu from 'react-hamburger-menu';
import './Navbar.scss';

import Logo from '../../static/img/LOGO2.png';

class Navbar extends React.Component {
  state = {
    open: false,
    scrolled: false
  }

  handleClick(e) {
    e.preventDefault();
    let open = this.state.open;

    this.setState({ open: !open })
  }

  handleScroll() {
    let scrollY = window.scrollY;
    if (scrollY > 200) {
      this.setState({ scrolled: true });
    } else {
      this.setState({ scrolled: false })
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this))
  }

  componentDidUpdate() {
    let scrolled = this.state.scrolled
    if (this.state.scrolled !== scrolled) {
      this.handleScroll()
    }
  }

  render() {
    return (
      <nav className={`Navbar ${ this.state.scrolled ? 'scrolled' : '' }`}>
        <img className="Navbar__logo" src={ Logo } alt="logo" />
        <HamburgerMenu
          className="hamburger"
          isOpen={this.state.open}
          menuClicked={this.handleClick.bind(this)}
          width={30}
          height={20}
          rotate={0}
          color='white'
          borderRadius={0}
          animationDuration={0.5}
        />
        <Scrollspy 
          className={ this.state.open ? 'Navbar__menu' : 'Navbar__menu hide' }
          items={ ['Hero', 'History', 'Countdown', 'Wish', 'Footer'] } 
          currentClassName="is-current"
          offset={-50}
        >
          <AnchorLink className="Navbar__item" href='#Hero'>Home</AnchorLink>
          <AnchorLink className="Navbar__item" href='#History'>History</AnchorLink>
          <AnchorLink className="Navbar__item" href='#Countdown'>Countdown</AnchorLink>
          <AnchorLink className="Navbar__item" href='#Wish'>Wish</AnchorLink>
          <AnchorLink className="Navbar__item" href='#Footer'>About us</AnchorLink>
        </Scrollspy>
      </nav>
    );
  }
}

export default Navbar;
