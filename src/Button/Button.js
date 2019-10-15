import React, {Component} from 'React';

class Button extends Component
{
	constructor(props)
	{
		super(props);
		this.state={running: true};
		this.start=this.start.bind(this);
		this.stop=this.stop.bind(this);
	}

	start()
	{
		this.setState({running: true});
	}

	stop()
	{
		this.setState({running: false});
	}
}

export default Button;