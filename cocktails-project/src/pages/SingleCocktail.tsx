import React from 'react';
import { useParams } from 'react-router-dom';
const SingleCocktail = () => {
  const { id } = useParams();
  return <div>{id}</div>;
};

export default SingleCocktail;
