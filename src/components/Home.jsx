import React from 'react';
import Card from './Card';
import './Home.css';
import logo from '../images/bird.jpg';

function Home() {

  return (
    <div className="homePage">
      <header className="head">
        <h1>Junk food</h1>
        <img className="logo" width="30px" src={logo} alt="logoTacos"/>
      </header>
      <main className="container">
        <Card mana={8} defence={50} strength={70} description="Bonjour le monde" />
        <Card mana={4} defence={12} strength={30} description="Tacos" />
      </main>
      <footer className="footer">
        <p>Copyright 2021 Wild Code School</p>
      </footer>
    </div>
  )
}

export default Home;