import React from "react";
import "./App.css";
import P1Image from '../src/phone.jpg';
import FImage from  '../src/friends.jpg';
import tabImage from '../src/tab.jpg';

function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="logo">template4u</div>
        <nav className="navigation">
          <a href="#home">home</a>
          <a href="#explore">explore</a>
          <a href="#create">create</a>
          <a href="#share">share</a>
        </nav>
      </header>

      <section id="home" className="hero">
        <div className="hero-content">
          <h1>Build social profiles and gain revenue profits</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit...</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit...</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit...</p>
        </div>
        <div className="signup-form">
          <h2>Sign Up Today</h2>
          <p>Please fill out this form to register</p>
          <form>
            <input type="text" placeholder="username" />
            <input type="email" placeholder="email" />
            <input type="password" placeholder="password" />
            <input type="password" placeholder="confirm password" />
            <button type="submit">submit</button>
          </form>
        </div>
      </section>

      <section id="explore" className="explore-section">
        <div className="section-header">
          <div className="section-title">
            <h1>explore</h1>
          </div>
          <div className="section-description">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit...</p>
            <button className="cta-button">find out more</button>
          </div>
        </div>
        <div className="content-wrapper">
          <img src={P1Image} alt="explore" className="content-image" />
          <div className="text-content">
            <h2>Explore & Connect</h2>
            <p>Lorem ipsum dolor sit amet consectetur...</p>
            <p>Lorem ipsum dolor sit amet consectetur...</p>
            <p>Lorem ipsum dolor sit amet consectetur...</p>
          </div>
        </div>
      </section>

      <section id="create" className="create-section">
        <div className="section-header">
          <div className="section-title">
            <h1>create</h1>
          </div>
          <div className="section-description">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit...</p>
            <button className="cta-button">find out more</button>
          </div>
        </div>
        <div className="content-wrapper reversed">
          <div className="text-content">
            <h2>create your passion</h2>
            <p>Lorem ipsum dolor sit amet consectetur...</p>
            <p>Lorem ipsum dolor sit amet consectetur...</p>
            <p>Lorem ipsum dolor sit amet consectetur...</p>
          </div>
          <img src={tabImage} alt="create" className="content-image" />
        </div>
      </section>

      <section id="share" className="share-section">
        <div className="section-header">
          <div className="section-title">
            <h1>share</h1>
          </div>
          <div className="section-description">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit...</p>
            <button className="cta-button">find out more</button>
          </div>
        </div>
        <div className="content-wrapper">
          <img src={FImage} alt="share" className="content-image" />
          <div className="text-content">
            <h2>share what you create</h2>
            <p>Lorem ipsum dolor sit amet consectetur...</p>
            <p>Lorem ipsum dolor sit amet consectetur...</p>
            <p>Lorem ipsum dolor sit amet consectetur...</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;