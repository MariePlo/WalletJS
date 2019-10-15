import React, { Component } from 'react';

class Clock extends Component
{
	/*constructor(props)
	{
		super(props);
		this.date=new Date();
	}*/

	render()
	{
		return(<div>{this.props.date.toLocaleTimeString()}</div>);
	}

	componentDidMount()
	{
		this.timerID=setInterval(() => {
			if(this.props.run)
			{
				this.setState({date:new Date()});
			}
		}, 1000);
	}
}

export default Clock;