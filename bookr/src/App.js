import React from 'react';
import './App.css';
import LandingHero from './Components/LandingHero';
import BookCarousel from './Components/BookCarousel/BookCarousel';
import AddReview from './Components/BookReview/AddReview';
import Book from './Components/Book';
import Header from './Components/Header';
import Footer from './Components/Footer';
import CollectionItemContainer from './Components/CollectionItemContainer';

import { Route } from 'react-router-dom';

const HomePage = () => (
  <main>
    <LandingHero />
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
      <Route exact path="/" component={HomePage} />
      {/* TODO - implement dynamic routing (i.e. `/book/:bookId)` */}
      {/* Source: https://reacttraining.com/react-router/web/api/Route/route-props */}
      <Route exact path="/book/:id" component={BookDetailPage} />
      <Route path="/book/:id/review" component={AddReview} />
      <Footer />
    </div>
  );
}

export default App;
