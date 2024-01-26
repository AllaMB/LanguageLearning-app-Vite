import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider, MobXProviderContext } from 'mobx-react';
import wordStore from '../MobX/WordStore';
import WordTable from '../WordTable/WordTable';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

// components
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Home, About, ExploreWords, GamePage, NotFoundPage } from '../Pages';

const App = () => {
  const { wordStore } = useContext(MobXProviderContext) || {};

  useEffect(() => {
    if (wordStore) {
      // Fetch words when the component mounts
      wordStore.fetchWords();
    }
  }, [wordStore]);

  return (
    <Router>
      <Provider wordStore={wordStore || {}}>
        <ErrorBoundary>
          <div className="container__app">
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route
                path="/exploreWords"
                element={<ExploreWords />}
              />
              <Route path="/game" element={<GamePage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
            <Footer />
          </div>
        </ErrorBoundary>
      </Provider>
    </Router>
  );
};

export default App;
