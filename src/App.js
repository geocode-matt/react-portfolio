import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <main>
        <div>
          <About />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
