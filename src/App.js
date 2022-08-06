import React from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Card from './components/Card';
import data from './components/data';

function App() {
  const newCard= data.map(card=>{
    return( 
    <Card 
    key={card.id}
    card={card} 
    />) 
  })
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <section className='cards-list'>
      {newCard}
      </section>
    </div>
  );
}

export default App;
  