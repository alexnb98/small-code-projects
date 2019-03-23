import React from 'react';
import styles from './Backdrop.module.css';

export default function Backdrop(props) {
	return props.show ? <div onClick={props.clicked} className={styles.Backdrop} /> : null;
}
