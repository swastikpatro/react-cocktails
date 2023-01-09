import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import Cocktail from './Cocktail';
import { stateType } from '../types';
import Loading from '../Loading';

const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

const Cocktails = ({ text }: { text: string }) => {
  const [state, setState] = useState<stateType>({
    cocktails: [],
    loading: true,
    error: false,
  });

  const fetchData = useCallback(
    async (url: string) => {
      setState((prevState) => ({ ...prevState, loading: true }));
      try {
        const res = await axios(`${url}${text}`);
        const {
          data: { drinks },
        } = res;

        if (drinks === null) {
          setState({ cocktails: [], loading: false, error: false });
          return;
        }
        const updatedDrinks = drinks.map((singleDrink: any) => {
          const {
            idDrink: id,
            strGlass: glass,
            strDrinkThumb: image,
            strDrink: name,
            strAlcoholic: alcohol,
          } = singleDrink;
          return { id, glass, image, alcohol, name };
        });
        setState((prevState) => ({
          ...prevState,
          cocktails: updatedDrinks,
          loading: false,
          error: false,
        }));
      } catch (err) {
        console.log(err);
        setState((prevState) => ({
          ...prevState,
          loading: false,
          error: true,
        }));
      }
    },
    [text]
  );

  useEffect(() => {
    fetchData(URL);
  }, [text, fetchData]);

  if (state.loading) {
    return (
      <section className='section'>
        <Loading />
      </section>
    );
  }

  if (state.error) {
    return (
      <section className='section'>
        <h2 style={{ color: 'red', textAlign: 'center' }}>
          Unable to fetch data 😢
        </h2>
      </section>
    );
  }

  if (state.cocktails.length === 0) {
    console.log('Im here');

    return (
      <section className='section'>
        <h2 style={{ margin: '0 auto', width: '90%', textAlign: 'center' }}>
          Your search '{text}' did not match with any of our products
        </h2>
      </section>
    );
  }

  return (
    <section className='section'>
      <div className='cocktails-center'>
        {state.cocktails.map((singleCocktail) => {
          return (
            <Cocktail key={singleCocktail.id} cocktailData={singleCocktail} />
          );
        })}
      </div>
    </section>
  );
};

export default Cocktails;
