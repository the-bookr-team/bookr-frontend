import React from 'react';
import { searchBooks } from '../../actions';
import { connect } from 'react-redux';

import './searchbar.css';

class SearchBar extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			query: ''
		};
	}
	s;
	changeHandler = (e) => {
		this.setState({ [e.target.name]: e.target.value });
		this.props.searchBooks(this.state.query);
	};

	render() {
		return (
			<div>
				<input value={this.state.query} name="query" onChange={this.changeHandler} placeholder="Search Bookr" />
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	books: state.bookSearch
});

export default connect(mapStateToProps, { searchBooks })(SearchBar);
