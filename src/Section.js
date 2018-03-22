import React from 'react';
import './Section.css';

const Section = (props) => {
	const obj = props.category;
	let rows =[];
	Object.entries(obj).forEach((value, i) => {
		rows.push(<tr key={value[0]}>
					<td className='ba b--near-black'>{value[0].toUpperCase()}</td>
					<td className='ba b--near-black'>{value[1]}</td>
				</tr>
			);
	});

	return(
		<div id='container'>
			<h2 className='tc' id='title'>{props.categoryText.toUpperCase()}</h2>
			<table className='ma2 ba b--black'>
				<tbody>
					{rows}
				</tbody>
			</table>
			<div className='tc' id='button'>
				{props.children}
			</div>
		</div>
	);
};

export default Section; 