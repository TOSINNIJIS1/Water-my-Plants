import React from 'react';
import './App.css';
import NavBar from './navbar/navbar';
import Dashboard from './dashboard/firstandsecond/dashboard'

function App() {
  return (
    <div id="top" className="app-shell">
      <NavBar />
      <main>
        <Dashboard />
      </main>
      <footer id="contact" className="site-footer">
        <p>Contact</p>
        <a href="#top">Back to top</a>
      </footer>
    </div>
  );
}

export default App;
