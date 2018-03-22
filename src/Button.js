import React, {Component} from 'react';

class Button extends Component {
	render() {
		return(
			<button className='ma2 pa2 br-pill' onClick={(e) => this.props.onClick(e, this.props.category)}>
				Generate
			</button>
		);
	}
}

export default Button;