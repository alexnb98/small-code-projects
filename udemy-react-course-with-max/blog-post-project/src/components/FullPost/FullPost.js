import React, { Component } from 'react';
import './FullPost.css';
import axios from 'axios';

class FullPost extends Component {
	state = {
		loadedPost: null,
		error: false
	};

	componentDidUpdate() {
		if (this.props.id && !this.state.error) {
			if (!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== this.props.id)) {
				axios
					.get('/posts/' + this.props.id)
					.then((response) => {
						this.setState({ loadedPost: response.data });
					})
					.catch((error) => {
						this.setState({ error: true });
						console.log('error', error);
					});
			}
		}
	}

	deletePostHandler = () => {
		axios.delete('/posts/' + this.props.id).then((response) => console.log('response', response));
	};

	render() {
		let post = <p style={{ textAlign: 'center' }}>Please select a Post!</p>;

		if (this.props.id) {
			post = <p style={{ textAlign: 'center' }}>Loading...</p>;
		}
		if (this.state.loadedPost) {
			post = (
				<div className="FullPost">
					<h1>{this.state.loadedPost.title}</h1>
					<p>{this.state.loadedPost.body}</p>
					<div className="Edit">
						<button onClick={this.deletePostHandler} className="Delete">
							Delete
						</button>
					</div>
				</div>
			);
		}
		if (this.state.error) {
			post = <p style={{ textAlign: 'center' }}>Something went wrong!</p>;
		}
		return post;
	}
}

export default FullPost;
