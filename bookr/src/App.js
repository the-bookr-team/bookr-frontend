import React from 'react';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import CollectionItem from './Components/CollectionItem';

function App() {
  return (
    <div className="App">
      <Header />
      <h1>Welcome to Bookr!</h1>
      <p>The place for all your book rating needs</p>

      <CollectionItem />

      <Footer />
    </div>
  );
}

export default App;
