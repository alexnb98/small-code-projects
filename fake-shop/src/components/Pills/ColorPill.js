import React from 'react';

export default function ColorPill(props) {
	const color = props.color;
	return <div className="rounded mr-3" style={{ width: '3rem', height: '3rem', background: color }} />;
}
