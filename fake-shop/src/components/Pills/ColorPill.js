import React from 'react';

export default function ColorPill(props) {
	const color = props.color;
	let selectedClass = '';
	if (props.isSelected) {
		selectedClass = 'shadow rounded-circle border border-dark';
	}
	return (
		<div
			onClick={props.click}
			className={selectedClass + ' rounded mr-3'}
			style={{ width: '3rem', height: '3rem', background: color }}
		/>
	);
}
