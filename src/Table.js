import React, {Component} from 'react';

const TableHeader = () => {
	return (
		<thead>
			<tr>
				<th>Topic</th>
				<th>Link</th>
				<th>Description</th>
			</tr>
		</thead>
	);
}

const TableBody = () => {
	return (
		<tbody>
			<tr>
				<td>React</td>
				<td>https://www.taniarascia.com/getting-started-with-react</td>
				<td>Getting Started with React - An Overview and Walkthrough Tutorial</td>
			</tr>
			<tr>
				<td>English</td>
				<td>https://www.native-english.ru/grammar/english-tenses</td>
				<td>Tenses in English. Table of English tenses.</td>
			</tr>
		</tbody>
	);
}

class Table extends Component {
	render() {
		return (
			<div>
			    <table>
			    	<TableHeader />
			    	<TableBody />
			    </table>
			</div>
		);
	}
}

export default Table;