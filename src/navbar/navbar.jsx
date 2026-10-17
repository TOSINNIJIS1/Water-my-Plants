import React from 'react';
import './navbar.scss';

export default function Nav() {
  return (
    <header className="container">
      <a className="logo" href="#top" aria-label="Mahiya H. home">
        <h1>Mahiya H.</h1>
      </a>
      <div className="nav">
        <nav aria-label="Primary navigation">
          <ul>
            <li><a href="#story">My story</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#process">Process</a></li>
            <li><a href="#contact">Contact me</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
