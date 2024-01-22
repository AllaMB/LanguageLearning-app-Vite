  import React, { useState, useContext } from 'react';
  import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
  import { AppProvider, useAppContext } from "../Context/AppContext";
  import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";


  //components 
  import Header from '../Header/Header';
  import Footer from '../Footer/Footer';
  import { Home, About, ExploreWords, GamePage, NotFoundPage } from '../Pages';

  const App = () => {
    const { words, updateWord, removeWord } = useAppContext();
    return (
      <Router>
        <AppProvider>
        <ErrorBoundary>
        <div className="container__app">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/exploreWords"
              element={<ExploreWords words={words} updateWord={updateWord} removeWord={removeWord} />}
            />
            <Route path="/game" element={<GamePage words={words} />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <Footer />
        </div>
        </ErrorBoundary>
        </AppProvider>
      </Router>
      );
    };
   

  export default App;