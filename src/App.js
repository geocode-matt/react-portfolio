import React, {useState} from 'react';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [AboutSelected, setAboutSelected] = useState(true);
  const [PortfolioSelected, setPortfolioSelected] = useState(false);
  const [ContactSelected, setContactSelected] = useState(false);
  const [ResumeSelected, setResumeSelected] = useState(false);
  return (
    <div>
      <Header
      AboutSelected={AboutSelected}
      setAboutSelected={setAboutSelected}
      PortfolioSelected={PortfolioSelected}
      setPortfolioSelected={setPortfolioSelected}
      ContactSelected={ContactSelected}
      setContactSelected={setContactSelected}
      ResumeSelected={ResumeSelected}
      setResumeSelected={setResumeSelected}
      ></Header>
      <main>
        <div>
          {!AboutSelected ? <></> : <About></About>}
          {!PortfolioSelected ? <></> : <Portfolio></Portfolio>}
          {!ContactSelected ? <></> : <Contact></Contact>}
          {!ResumeSelected ? <></> : <Resume></Resume>}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
