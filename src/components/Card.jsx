import React, { useState } from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  border: 1px solid #ccc;
  padding: 16px;
  margin: 16px;
  width: 300px;
  transition: transform 1s;

  &:hover {
    transform: scale(1.07);
  }
`;

const CardImage = styled.img`
  max-width: 100%;
  height: auto;
`;

const Card = ({ title, imageUrl, details }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <CardContainer
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardImage src={imageUrl} alt={title} />
      <h2>{title}</h2>
      {isHovered && <h3>{details}</h3>}
    </CardContainer>
  );
};

export default Card;
