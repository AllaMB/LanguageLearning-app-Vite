//displaying a single word with the ability to show/hide the translation
import React, { useState }  from 'react';
import style from './Word.module.scss';

const Word = ({ word }) => {
  const [showTranslation, setShowTranslation] = useState(false);

  const handleShowTranslation = () => {
    setShowTranslation(true);
  };

  return (
    <div className="word">
      <h2>{word.english}</h2>
      {!showTranslation && <button onClick={handleShowTranslation}>Показать перевод</button>}
      {showTranslation && <p>{word.russian}</p>}
    </div>
  );
};

export default Word;


// import React, { useState, useEffect, useRef } from 'react';
// import styles from './Word.module.scss';

// const Word = ({ word }) => {
//   const [showTranslation, setShowTranslation] = useState(false);
//   const wordRef = useRef(null);

//   useEffect(() => {
//     if (showTranslation && wordRef.current) {
//       wordRef.current.focus();
//     }
//   }, [showTranslation]);

//   const handleShowTranslation = () => {
//     setShowTranslation(true);
//   };

//   return (
//     <div 
//     className={styles.word}
//     onClick={handleShowTranslation}
//     ref={wordRef}
//     tabIndex="0"
// >

//     <h2>{word.english}</h2>
//       {!showTranslation && (
//         <button onClick={handleShowTranslation}>
//           Показать перевод
//         </button>
//       )}
//       {showTranslation && <p>{word.russian}</p>}
//     </div>
//   );
// };

// export default Word;
