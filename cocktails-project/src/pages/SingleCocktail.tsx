import { useCallback, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Error from '../pages/Error';
import { singleProductStateType } from '../types';

const SingleCocktail = () => {
  let { id } = useParams();
  id = id?.slice(1);

  const [singleProductState, setSingleProductState] =
    useState<singleProductStateType>({
      cocktail: null,
      loading: true,
      error: false,
    });

  const fetchSingleProductData = useCallback(async () => {
    setSingleProductState((prevState) => ({ ...prevState, loading: true }));
    try {
      const res: any = await axios(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
      );

      console.log(res);

      const {
        data: { drinks },
      } = res;

      console.log({ data: res.data });

      if (drinks === null || res.data === '') {
        setSingleProductState({
          cocktail: null,
          loading: false,
          error: false,
        });
        return;
      }

      const [drink] = drinks;
      console.log(drink);

      const ingredients = Object.keys(drink)
        .filter(
          (singleProp) =>
            singleProp.includes('Ingredient') && drink[singleProp] !== null
        )
        .map((singleProp) => drink[singleProp]);
      console.log(ingredients);

      const {
        strDrink: name,
        strDrinkThumb: image,
        strAlcoholic: alcohol,
        strCategory: category,
        strInstructions: instructions,
        strGlass: glass,
      } = drink;

      const newCocktail = {
        name,
        image,
        alcohol,
        category,
        instructions,
        glass,
        ingredients,
      };

      setSingleProductState({
        cocktail: newCocktail,
        loading: false,
        error: false,
      });
    } catch (err) {
      console.log(err);

      setSingleProductState((prevState) => ({
        ...prevState,
        loading: false,
        error: true,
      }));
    }
  }, [id]);

  useEffect(() => {
    fetchSingleProductData();
  }, [id, fetchSingleProductData]);

  if (singleProductState.loading) {
    return (
      <section className='cocktail-section'>
        <div className='loading-container'>
          <h2>Loading...</h2>
          <div className='loader-singleProduct'></div>
        </div>
      </section>
    );
  }

  if (singleProductState.error) {
    return (
      <section className='cocktail-section'>
        <div className='loading-container'>
          <h2 style={{ color: 'red' }}>
            Unable to fetch Data, please check your internet connection 🛠.
          </h2>
        </div>
      </section>
    );
  }

  if (singleProductState.cocktail === null) {
    return (
      <section className='cocktail-section'>
        <Error />
      </section>
    );
  }

  const { name, glass, image, alcohol, ingredients, instructions, category } =
    singleProductState.cocktail;
  return (
    <section className='cocktail-section'>
      <h2 className='section-title'>{name}</h2>

      <div className='drink'>
        <img src={image} alt={name} />
        <div className='drink-info'>
          <p>
            <span className='drink-data'>name :</span> {name}
          </p>
          <p>
            <span className='drink-data'>category :</span> {category}
          </p>
          <p>
            <span className='drink-data'>info :</span> {alcohol}
          </p>
          <p>
            <span className='drink-data'>glass :</span> {glass}
          </p>
          <p>
            <span className='drink-data'>Instructions :</span> {instructions}
          </p>

          <p>
            <span className='drink-data'>Ingredients :</span>
            {ingredients.join(', ')}
          </p>
        </div>
      </div>
      <Link to='/' className='btn btn-primary' style={{ marginTop: '1rem' }}>
        Back to Home
      </Link>
    </section>
  );
};

export default SingleCocktail;
