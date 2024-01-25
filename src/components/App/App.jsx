  import React, { useState, useContext } from 'react';
  import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
  import { AppProvider, useAppContext } from "../Context/AppContext";


  //components 
  import Header from '../Header/Header';
  import Footer from '../Footer/Footer';
  import { Home, About, ExploreWords, GamePage, NotFoundPage } from '../Pages';
  import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

  const App = () => {
    return (
      <Router>
        <AppProvider>
          <div className="container__app">
            <Header />
            <Routes>
              <Route
                path="/"
                element={
                  <ErrorBoundary>
                    <Home />
                  </ErrorBoundary>
                }
              />
              <Route
                path="/about"
                element={
                  <ErrorBoundary>
                    <About />
                  </ErrorBoundary>
                }
              />
              <Route
                path="/exploreWords/*"
                element={
                  <ErrorBoundary>
                    <ExploreWords />
                  </ErrorBoundary>
                }
              />
              <Route
                path="/game"
                element={
                  <ErrorBoundary>
                    <GamePage />
                  </ErrorBoundary>
                }
              />
              <Route
                path="*"
                element={
                  <ErrorBoundary>
                    <NotFoundPage />
                  </ErrorBoundary>
                }
              />
            </Routes>
            <Footer />
          </div>
        </AppProvider>
      </Router>
    );
  };
  
  export default App;