import React from 'react';
import { searchBooks } from '../../actions';
import { connect } from 'react-redux';
import { Search } from 'react-feather';
import { Dropdown } from 'semantic-ui-react';

import './searchbar.css';

class SearchBar extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			query: '',
			loading: false,
			options: [],
			searchedBooks: {}
		};
	}

	changeHandler = (e) => {
		clearTimeout(this.timer);
		this.setState({ query: e.target.value });
		this.timer = setTimeout(this.fetchOptions, 1000);
		this.props.searchBooks(this.state.query);
		console.log(this.state.query);
	};

	onSearchChange = (e) => {
		clearTimeout(this.timer);
		// this.changeHandler();
		this.timer = setTimeout(this.fetchOptions, 1000);
	};

	fetchOptions = () => {
		this.setState({ loading: true });
		const options = [];
		const searchedBooks = [];
		this.props.booksSearched.forEach((book) => {
			searchedBooks[book.goodreadsId] = book;
			options.push({
				key: book.goodreadsId,
				value: book.goodreadsId,
				text: book.title,
				image: book.book_img
			});
			this.setState({ loading: false, options, searchedBooks: searchedBooks });
			console.log({ options: options });
		});
	};

	render() {
		console.log(this.props.booksSearched);
		return (
			<div className="searchbar">
				<div className="search-icon">
					<Search size="14px" />
				</div>
				{/* <input
					value={this.state.query}
					name="query"
					onChange={this.changeHandler}
					placeholder="Search | Bookr"
				/> */}
				<Dropdown
					className="dropdown"
					search
					fluid
					placeholder="Search Bookr - powered by Goodreads"
					value={this.state.query}
					// name="query"
					onSearchChange={this.changeHandler}
					options={this.state.options}
				/>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	booksSearched: state.booksSearched
});

export default connect(mapStateToProps, { searchBooks })(SearchBar);
