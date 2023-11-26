            import React from 'react';
            import CardItem from '../CardItem/CardItem';
            import style from './CardList.module.scss';


        
            const CardList = ({ words }) => {
                return (
                <div className={style.cardList}>
                    {words.map((word) => (
                    <CardItem key={word.id} word={word.english} translation={word.russian} />
                    ))}
                </div>
                );
            };
            
            export default CardList;