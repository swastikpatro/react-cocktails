import { Link } from 'react-router-dom';
import { cocktailType } from '../types';

const Cocktail = ({ cocktailData }: { cocktailData: cocktailType }) => {
  const { id, glass, image, name, alcohol } = cocktailData;
  return (
    <article className='cocktail'>
      <div className='img-container'>
        <img src={image} alt={name} />
      </div>
      <div className='cocktail-footer'>
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <p>{alcohol}</p>
        <Link className='btn btn-primary' to={`/cocktail/${id}`}>
          Details
        </Link>
      </div>
    </article>
  );
};

export default Cocktail;
