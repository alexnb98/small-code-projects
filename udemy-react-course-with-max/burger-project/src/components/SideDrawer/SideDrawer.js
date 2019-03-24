import React from 'react';
import Logo from '../Logo/Logo';
import NavigationItems from '../Navigation/NavigationItems/NavigationItems';
import styles from './SideDrawer.module.css';
import Backdrop from './../UI/Backdrop/Backdrop';

export default function SideDrawer(props) {
	let clasesArr = [ styles.SideDrawer, styles.Open ];
	if (!props.show) {
		clasesArr = [ styles.SideDrawer, styles.Close ];
	}
	return (
		<React.Fragment>
			<Backdrop show={props.show} clicked={props.close} />
			<div className={clasesArr.join(' ')}>
				<Logo height="11%" />
				<nav>
					<NavigationItems />
				</nav>
			</div>
		</React.Fragment>
	);
}
