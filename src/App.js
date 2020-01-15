import React, {Component} from 'react';
import Table from './Table';
import Form from './Form';

class App extends Component {
	state = {
		links: [
			{
				topic: 'React',
				link: 'www.taniarascia.com/getting-started-with-react',
				description: 'Getting Started with React - An Overview and Walkthrough Tutorial'
			},

			{
				topic: 'English',
				link: 'www.native-english.ru/grammar/english-tenses',
				description: 'Tenses in English. Table of English tenses.'
			}
		]
	}

	removeLink = (index) => {
		const { links } = this.state;

		this.setState({
			links: links.filter((item, i) => {
				return i !== index;
			})
		});
	}

	handleSubmit = (link) => {
		this.setState({
			links: [...this.state.links, link]
		});
	}

	render() {
		const { links } = this.state;
		return (
			<div className="container">
			    <Table linkData={links} removeLink={this.removeLink} />
			    <Form handleSubmit={this.handleSubmit} />
			</div>
		);
	}
}

export default App;