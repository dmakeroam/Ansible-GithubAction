import React from 'react'
import './Button.scss';

class Button extends React.Component {
  render() {
		const props = this.props;
    return (
      <button className={`Button ${props.variant}`} type={ props.type } onClick={ props.onClick }>
				{ props.children }
      </button>
    )
  }
}

export default Button;