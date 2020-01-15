import React, {Component} from 'react';

class Table extends Component {
	render() {
		return (
			<div>
			    <table>
			    	<thead>
			    		<tr>
			    			<th>Topic</th>
			    			<th>Link</th>
			    			<th>Description</th>
			    		</tr>
			    	</thead>
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
			    </table>
			</div>
		);
	}
}

export default Table;