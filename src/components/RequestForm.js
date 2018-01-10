import React, { Component } from "react";

export default class RequestForm extends Component {
	state = {
		value: ""
	};

	handleChange = event => {
		this.setState({
			value: event.target.value
		})
	};

	render() {
		return (
			<form>
				<label>
					Name:
					<input
						type="text"
						value={this.state.value}
						onChange={this.handleChange}
					/>
				</label>
				<input type="submit" value="submit" />
			</form>
		);
	}
}
