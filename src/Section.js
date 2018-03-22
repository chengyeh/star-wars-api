import React from 'react';
import './Section.css';

const Section = (props) => {
	const obj = props.category;
	if(Object.keys(obj).length !== 0) {
		document.querySelector('table').className = 'ma2 ba-ns b--black';
	}

	return(
		<div id='container'>
			<h2 className='tc' id='title'>{props.categoryText.toUpperCase()}</h2>
			<table>
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