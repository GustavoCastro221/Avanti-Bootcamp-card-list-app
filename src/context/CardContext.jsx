import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const CardContext = createContext();

export const useCardContext = () => {
  return useContext(CardContext);
};

export const CardProvider = ({ children }) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    //Adicionar Requisição para backend com axios e settar dados dos cards
    const mockData = [
      {
        title: 'Card 1',
        imageUrl: '../public/imagem1.jpg',
        details: 'Detalhes do Card 1',
      },
      {
        title: 'Card 2',
        imageUrl: '../public/imagem2.jpg',
        details: 'Detalhes do Card 2',
      },
    ];
    setCards(mockData);
  }, []);

  return (
    <CardContext.Provider value={{ cards }}>{children}</CardContext.Provider>
  );
};
