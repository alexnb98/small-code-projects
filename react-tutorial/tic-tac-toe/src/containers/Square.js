import React from 'react';

export default function Square(props) {
	return (
		<div
			onClick={props.onClick}
			className="m-1 bg-dark rounded display-4 text-white"
			style={{
				height: '5rem',
				width: '5rem',
				boxSizing: 'border-box'
			}}
		>
			{props.value}
		</div>
	);
}
