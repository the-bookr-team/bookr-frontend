import React, { Component } from 'react';
import './App.css';
import LandingHero from './Components/LandingHero';
import BookCarousel from './Components/BookCarousel/BookCarousel';
import AddReview from './Components/BookReview/AddReview';
import Book from './Components/Book';
import Header from './Components/Header';
import Footer from './Components/Footer/Footer';
import About from './Components/About/About';
import Searchbar from './Components/Searchbar/Searchbar';
import CollectionItemContainer from './Components/CollectionItemContainer/CollectionItemContainer';
import { getBooks } from './actions';

import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

const HomePage = () => (
	<main>
		<LandingHero />
		<div className="container-search">
			<Searchbar />
		</div>
		<h3>Featured Books</h3>
		<BookCarousel />
		<CollectionItemContainer />
	</main>
);

const BookDetailPage = () => (
	<main>
		<Book />
	</main>
);

class App extends Component {
	componentDidMount() {
		this.props.getBooks();
	}

	render() {
		return (
			<div className="App">
				<Header />
				<div className="app-body">
					<Route exact path="/" component={HomePage} />
					{/* TODO - implement dynamic routing (i.e. `/book/:bookId)` */}
					{/* Source: https://reacttraining.com/react-router/web/api/Route/route-props */}
					<Route exact path="/book/:id" component={BookDetailPage} />
					<Route path="/book/:id/review" component={AddReview} />
					<Route path="/about" component={About} />
				</div>
				<Footer />
			</div>
		);
	}
}

export default connect(null, { getBooks })(App);
