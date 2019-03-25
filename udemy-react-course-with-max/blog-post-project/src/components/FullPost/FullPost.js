import React, { Component } from 'react';

import './FullPost.css';
import { Axios } from 'axios';

class FullPost extends Component {
	state = {
		loadedPost: null
	};

	componentDidUpdate() {
		if (this.props.id) {
			Axios.get('https://jsonplaceholder.typicode.com/posts' + this.props.id).then((response) => {
				console.log(response);
			});
		}
	}

	render() {
		let post = <p className={{ textAlign: 'center' }}>Please select a Post!</p>;
		post = (
			<div className="FullPost">
				<h1>Title</h1>
				<p>Content</p>
				<div className="Edit">
					<button className="Delete">Delete</button>
				</div>
			</div>
		);
		return post;
	}
}

export default FullPost;
