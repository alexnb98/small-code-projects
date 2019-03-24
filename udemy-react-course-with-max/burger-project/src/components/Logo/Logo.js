import React from 'react';
import burgerLogo from '../../assets/images/burger-logo.png';

export default function Logo(props) {
	return (
		<div
			style={{
				background: '#fff',
				padding: '8px',
				height: props.height,
				boxSizing: 'border-box',
				borderRadius: '5px'
			}}
		>
			<img
				style={{
					height: '100%'
				}}
				src={burgerLogo}
				alt="MyBurger"
			/>
		</div>
	);
}
