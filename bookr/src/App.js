import React from 'react';
import './App.css';
import LandingHero from './Components/LandingHero'
import BookCarousel from './components/BookCarousel/BookCarousel';
import Book from './components/Book';
import Header from './components/Header';
import Footer from './components/Footer';
import CollectionItemContainer from './components/CollectionItemContainer';

import { Route } from 'react-router-dom';

const HomePage = () => (
  <main>
    <BookCarousel />
    <CollectionItemContainer />
  </main>
);

const BookDetailPage = () => (
  <main>
    <Book />
  </main>
);

function App() {
  return (
    <div className="App">
      <Header />
      <LandingHero />
      <h1>Welcome to Bookr!</h1>
      <p>The place for all your book rating needs</p>
      <Route exact path="/" component={HomePage} />
      {/* TODO - implement dynamic routing (i.e. `/book/:bookId)` */}
      {/* Source: https://reacttraining.com/react-router/web/api/Route/route-props */}
      <Route path="/book" component={BookDetailPage} />
      <Footer />
    </div>
  );
}

export default App;
