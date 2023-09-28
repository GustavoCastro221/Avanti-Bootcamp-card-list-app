import React from 'react';
import Card from './Card';
import { useCardContext } from '../context/CardContext';
import styled from 'styled-components';

const HorizontalCardList = styled.div`
  display: flex;
  flex-wrap: nowrap;   
  overflow-x: auto;              
  max-width: 100%;     
`;

const CardContainer = styled.div`
  flex: 0 0 300px;
`;

const CardList = () => {
  const { cards } = useCardContext();

  return (
    <HorizontalCardList>
      {cards.map((card, index) => (
        <CardContainer key={index}>
            <Card
            key={index}
            title={card.title}
            imageUrl={card.imageUrl}
            details={card.details}
            />
        </CardContainer>
        
      ))}
    </HorizontalCardList>
  );
};

export default CardList;
