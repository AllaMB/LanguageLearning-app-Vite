  import React, { useState, useContext } from 'react';
  import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
  import { AppProvider, useAppContext } from "../Context/AppContext";


  //components 
  import Header from '../Header/Header';
  import Footer from '../Footer/Footer';
  import { Home, About, ExploreWords, GamePage, NotFoundPage } from '../Pages';
  import AddWordForm from '../AddWordForm/AddWordForm';

  const App = () => {
    return (
      <Router>
        <AppProvider>
          <div className="container__app">
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/exploreWords/*" element={<ExploreWords />} />
              <Route path="/game" element={<GamePage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
            <Footer />
          </div>
        </AppProvider>
      </Router>
    );
  };
  
  export default App;
  