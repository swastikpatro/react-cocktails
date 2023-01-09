import axios from 'axios';
import { useEffect, useState } from 'react';

const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

const Cocktails = () => {
  const [state, setState] = useState({
    cocktails: [],
    loading: true,
    error: false,
  });

  const fetchData = async (url: string) => {
    setState((prevState) => ({ ...prevState, loading: true }));
    try {
      const res = await axios(url);
      const {
        data: { drinks },
      } = res;

      if (drinks === null) {
        throw new Error("Can't find the product you searched");
      }
      const updatedDrinks = drinks.map((singleDrink) => {
        const {
          idDrink: id,
          strGlass: glass,
          strDrinkThumb: image,
          strAlcoholic: alcohol,
        } = singleDrink;
        return { id, glass, image, alcohol };
      });
      setState((prevState) => ({
        ...prevState,
        cocktails: updatedDrinks,
        loading: false,
      }));
    } catch (err) {
      console.log(err);
      setState((prevState) => ({
        ...prevState,
        loading: false,
        error: true,
      }));
    }
  };

  useEffect(() => {
    fetchData(URL);
  }, []);

  if (state.loading) {
    return (
      <section className='cocktail-section'>
        <div className='loaders-center'>
          <div className='loader'></div>
          <div className='loader'></div>
          <div className='loader'></div>
          <div className='loader'></div>
        </div>
      </section>
    );
  }
  if (state.error) {
    return (
      <section className='cocktail-section'>
        <h2 style={{ color: 'red', textAlign: 'center' }}>
          Unable to fetch data 😢
        </h2>
      </section>
    );
  }

  console.log(state.cocktails);

  return (
    <section className='cocktail-section'>
      <div className='cocktails-center'>
        {state.cocktails.map((singleCocktail) => {
          return <article key={singleCocktail.id}>{singleCocktail.id}</article>;
        })}
      </div>
    </section>
  );
};

export default Cocktails;
