import React from 'react';
import './Section.css';

const Section = (props) => {
	const obj = props.category;
	if(Object.keys(obj).length !== 0) {
		console.log(obj);
		document.querySelector(`#${props.categoryText}`).className = 'ma2 ba-ns b--black';
	}

	// Put {rows} between <tbody>
	// let rows =[];
	// Object.entries(obj).forEach((value, i) => {
	// 	rows.push(<tr key={value[0]}>
	// 				<td className='ba b--near-black'>{value[0].toUpperCase()}</td>
	// 				<td className='ba b--near-black'>{value[1]}</td>
	// 			</tr>
	// 		);
	// });

	return(
		<div id='container'>
			<h2 className='tc' id='title'>{props.categoryText.toUpperCase()}</h2>
			<table id={props.categoryText}>
				<tbody>
					{
						Object.entries(obj).map((value, i) => {
							return(<tr key={value[0]}>
										<td className='ba'>{value[0].toUpperCase()}</td>
										<td className='ba'>{value[1]}</td>
									</tr>
								);
						})
					}
				</tbody>
			</table>
			<div className='tc' id='button'>
				{props.children}
			</div>
		</div>
	);
};

export default Section; 