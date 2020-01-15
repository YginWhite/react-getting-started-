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

const TableBody = (props) => {
	const rows = props.linkData.map((row, index) => {
		return (
			<tr key={index}>
				<td>{row.topic}</td>
				<td>{row.link}</td>
				<td>{row.description}</td>
			</tr>
		);
	});
	return (
		<tbody>
			{rows}
		</tbody>
	);
}

class Table extends Component {
	render() {
		const { linkData } = this.props;

		return (
			<div>
			    <table>
			    	<TableHeader />
			    	<TableBody linkData={linkData}/>
			    </table>
			</div>
		);
	}
}

export default Table;