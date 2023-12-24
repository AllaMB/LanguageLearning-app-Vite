  import React from 'react';
  import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

  //components 
  import Header from '../Header/Header';
  import Main from '../Main/Main';
  import Footer from '../Footer/Footer';
  import WordCardCarousel from '../WordCardCarousel/WordCardCarousel';
  import { Home, About, ExploreWords, GamePage, NotFoundPage } from '../Pages';
  import style from './App.module.scss';
  import WordList from '../WordList/WordList';




  const App = () => {
    const words = [
      {"id":"14836","english":"content","transcription":"[ ˈkɒntɛnt ]","russian":"удовлетворенный","tags":"emotions","tags_json":"[\"emotions\"]"},
      {"id":"14837","english":"raspberry","transcription":"[ ˈrɑːzbɛri ]","russian":"малина","tags":"fruits","tags_json":"[\"fruits\"]"},
      {"id":"14838","english":"waiter","transcription":"[ ˈweɪtər ]","russian":"официант","tags":"professions","tags_json":"[\"professions\"]"},
      {"id":"14839","english":"hand","transcription":"[ hænd ]","russian":"рука","tags":"body","tags_json":"[\"body\"]"},
      {"id":"14840","english":"tea","transcription":"[ tiː ]","russian":"чай","tags":"drinks","tags_json":"[\"drinks\"]"},
      {"id":"14841","english":"blusher","transcription":"[ ˈblʌʃər ]","russian":"румяна","tags":"cosmetics","tags_json":"[\"cosmetics\"]"},
      {"id":"14842","english":"peach","transcription":"[ piːtʃ ]","russian":"персик","tags":"fruits","tags_json":"[\"fruits\"]"},
      {"id":"14843","english":"juice","transcription":"[ dʒuːs ]","russian":"сок","tags":"drinks","tags_json":"[\"drinks\"]"},
      {"id":"14844","english":"curious","transcription":"[ ˈkjʊərɪəs ]","russian":"любопытный","tags":"emotions","tags_json":"[\"emotions\"]"},
      {"id":"14845","english":"mascara","transcription":"[ mæsˈkɑːrə ]","russian":"тушь для ресниц","tags":"cosmetics","tags_json":"[\"cosmetics\"]"},
      {"id":"14846","english":"heel","transcription":"[ hiːl ]","russian":"пятка","tags":"body","tags_json":"[\"body\"]"},
      {"id":"14847","english":"hopeful","transcription":"[ ˈhəʊpfʊl ]","russian":"надеющийся","tags":"emotions","tags_json":"[\"emotions\"]"},
      {"id":"14848","english":"judge","transcription":"[ dʒʌdʒ ]","russian":"судья","tags":"professions","tags_json":"[\"professions\"]"},
      {"id":"14849","english":"grape","transcription":"[ ɡreɪp ]","russian":"виноград","tags":"fruits","tags_json":"[\"fruits\"]"},
      {"id":"14850","english":"gardener","transcription":"[ ˈɡɑːrdnər ]","russian":"садовник","tags":"professions","tags_json":"[\"professions\"]"},
      {"id":"14851","english":"waist","transcription":"[ weɪst ]","russian":"талия","tags":"body","tags_json":"[\"body\"]"},
      {"id":"14852","english":"wine","transcription":"[ waɪn ]","russian":"вино","tags":"drinks","tags_json":"[\"drinks\"]"},
      {"id":"14853","english":"lipstick","transcription":"[ ˈlɪpstɪk ]","russian":"губная помада","tags":"cosmetics","tags_json":"[\"cosmetics\"]"},
      {"id":"14854","english":"sleepy","transcription":"[ ˈsliːpi ]","russian":"сонный","tags":"emotions","tags_json":"[\"emotions\"]"},
      {"id":"14855","english":"happy","transcription":"[ ˈhæpi ]","russian":"счастливый","tags":"emotions","tags_json":"[\"emotions\"]"}
    ];


    return (
      <Router>
      <div className="container__app">
        <Header />
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/exploreWords" element={<ExploreWords words={words} />} />
            <Route path="/game" element={<GamePage words={words}/>} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          {/* Conditional rendering based on the route */}
{/* Home page */}
          {window.location.pathname === '/' && (
            <div>
              <h1>We'll put something on the Home page</h1>
            </div>
          )}
{/* About page */}
{window.location.pathname === '/about' && (
            <div>
              <h1>We'll put something on the About page</h1>
            </div>
          )}

{/* //Game Page// */}
{window.location.pathname === '/game' && (
            <div>
              <GamePage words={words} />
            </div>
          )}


{/* Explore Words Page */}
  {window.location.pathname === '/exploreWords' && (
            <div>
              <h1>Lorem ipsum dolor sit amet.</h1>
              <WordTable />
            </div>
          )}



          <Footer />
          
      </div>
    </Router>
    );
  };
  export default App;
