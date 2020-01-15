import React, {Component} from 'react';
import Table from './Table';

class App extends Component {
	render() {
		const links = [
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
		];

		return (
			<div className="container">
			    <Table linkData={links}/>
			</div>
		);
	}
}

export default App;