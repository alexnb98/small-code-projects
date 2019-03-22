import React from 'react';
import classes from './Layout.module.css';

const layout = (props) => {
	return (
		<React.Fragment>
			<div className={classes.Content}>Toolbar, SideDrawer, Backdrop</div>
			<main>{props.children}</main>
		</React.Fragment>
	);
};

export default layout;
