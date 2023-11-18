import React from 'react';
import WordList from './WordList';
import style from './App.module.scss'; // Подключение глобальных стилей
import './Word.scss'; // Подключение стилей Word
import './WordList.scss'; // Подключение стилей WordList
import Header  from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';


const words = [
    [{"id":"14735","english":"airplane, plane, aircraft","transcription":"[ ˈeəpleɪn ] [ pleɪn ] [ ˈeəkrɑːft ]","russian":"самолет","tags":"noun","tags_json":"[\"noun\"]"},{"id":"14736","english":"aisle","transcription":"[ aɪl ]","russian":"проход","tags":"аэропорт","tags_json":"[\"u0430u044du0440u043eu043fu043eu0440u0442\"]"},{"id":"14737","english":"aisle seat","transcription":"[ aɪl siːt ]","russian":"место у прохода","tags":" аэропорт","tags_json":"[\" u0430u044du0440u043eu043fu043eu0440u0442\"]"},{"id":"14738","english":"arrival and departure monitor","transcription":"[ əˈraɪvl̩ ənd dɪˈpɑːtʃə ˈmɒnɪtə ]","russian":"табло вылетов и прилетов","tags":" аэропорт","tags_json":"[\" u0430u044du0440u043eu043fu043eu0440u0442\"]"},{"id":"14739","english":"baggage carousel","transcription":"[ ˈbæɡɪdʒ ˌkærəˈsel ]","russian":"багажный транспортер","tags":" аэропорт","tags_json":"[\" u0430u044du0440u043eu043fu043eu0440u0442\"]"},{"id":"14740","english":"baggage claim area","transcription":"[ ˈbæɡɪdʒ kleɪm ˈeəriə ]","russian":"зонa получения багажа","tags":" аэропорт","tags_json":"[\" u0430u044du0440u043eu043fu043eu0440u0442\"]"},{"id":"14741","english":"baggage claim check","transcription":"[ ˈbæɡɪdʒ kleɪm tʃek ]","russian":"багажный талон","tags":" аэропорт","tags_json":"[\" u0430u044du0440u043eu043fu043eu0440u0442\"]"},{"id":"14742","english":"boarding","transcription":"[ ˈbɔːdɪŋ ]","russian":"посадка","tags":" аэропорт","tags_json":"[\" u0430u044du0440u043eu043fu043eu0440u0442\"]"},{"id":"14743","english":"boarding pass","transcription":"[ ˈbɔːdɪŋ pɑːs ]","russian":"посадочный талон","tags":" аэропорт","tags_json":"[\" u0430u044du0440u043eu043fu043eu0440u0442\"]"},{"id":"14744","english":"cabin","transcription":"[ ˈkæbɪn ]","russian":"салон самолета","tags":" аэропорт","tags_json":"[\" u0430u044du0440u043eu043fu043eu0440u0442\"]"},{"id":"14745","english":"carry-on bag","transcription":"[ ˈkæri ɒn bæɡ ]","russian":"ручная кладь","tags":" аэропорт","tags_json":"[\" u0430u044du0440u043eu043fu043eu0440u0442\"]"},{"id":"14746","english":"check-in counter","transcription":"[ tʃek ɪn ˈkaʊntə ]","russian":"стойка регистрации","tags":" аэропорт","tags_json":"[\" u0430u044du0440u043eu043fu043eu0440u0442\"]"},{"id":"14747","english":"co-pilot","transcription":"[ ˈkəʊˈpaɪlət ]","russian":"второй пилот","tags":" аэропорт","tags_json":"[\" u0430u044du0440u043eu043fu043eu0440u0442\"]"},{"id":"14748","english":"cockpit","transcription":"[ ˈkɒkpɪt ]","russian":"кабина самолета","tags":" аэропорт","tags_json":"[\" u0430u044du0440u043eu043fu043eu0440u0442\"]"},{"id":"14749","english":"control tower","transcription":"[ kənˈtrəʊl ˈtaʊə ]","russian":"диспетчерская вышка","tags":" аэропорт","tags_json":"[\" u0430u044du0440u043eu043fu043eu0440u0442\"]"},{"id":"14750","english":"customs","transcription":"[ ˈkʌstəmz ]","russian":"таможня","tags":" аэропорт","tags_json":"[\" u0430u044du0440u043eu043fu043eu0440u0442\"]"},{"id":"14751","english":"delay","transcription":"[ dɪˈleɪ ]","russian":"задержка","tags":" аэропорт","tags_json":"[\" u0430u044du0440u043eu043fu043eu0440u0442\"]"},{"id":"14752","english":"departure gate\t","transcription":"[ dɪˈpɑːtʃə ɡeɪt ]","russian":"выход (на посадку в самолет)","tags":" аэропорт","tags_json":"[\" u0430u044du0440u043eu043fu043eu0440u0442\"]"},{"id":"14754","english":"airport","transcription":"[ ˈerˌpôrt ]","russian":"аэропорт","tags":"аэропорт","tags_json":"[\"u0430u044du0440u043eu043fu043eu0440u0442\"]"}]
];

function App() {
  return (
    <div className="container__app">
      <Header />
      <Main />
      <Footer />
      <h1>Word Learning App</h1>
      <WordList words={words} />
    </div>
  );
}

export default App;