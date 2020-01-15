import React, {Component} from 'react';

class Form extends Component {
	constructor(props) {
		super(props);

		this.initialState = {
			topic: '',
			link: '',
			description: ''
		};
		this.state = this.initialState;
	}

	handleChange = (event) => {
		const { name, value } = event.target;

		this.setState({
			[name]: value
		});
	}

	submitForm = () => {
		this.props.handleSubmit(this.state);
		this.setState(this.initialState);
	}

	render() {
		const { topic, link, description } = this.state;

		return (
			<form action="">
				<label for="topic">Topic</label>
				<input type="text" name="topic" value={topic} onChange={this.handleChange} />

				<label for="link">Link</label>
				<input type="text" name="link" value={link} onChange={this.handleChange} />

				<label for="description">Description</label>
				<input type="text" name="description" value={description} onChange={this.handleChange} />

				<input type="button" value="Submit" onClick={this.submitForm} />
			</form>
		);
	}
}

export default Form;