import React from 'react';
import './App.css';
import LandingHero from './Components/LandingHero'
import BookCarousel from './Components/BookCarousel/BookCarousel';
import Header from './Components/Header';
import Footer from './Components/Footer';
import CollectionItemContainer from './Components/CollectionItemContainer';

function App() {
  return (
    <div className="App">
      <Header />
      <LandingHero />
      <BookCarousel />
      <CollectionItemContainer />
      <Footer />
    </div>
  );
}

export default App;
