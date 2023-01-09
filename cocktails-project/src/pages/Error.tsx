import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <section className='error-page section'>
      <div className='error-container'>
        <h1>Oops!, you reached the dead end</h1>
        <button className='btn btn-primary'>
          <Link to='/'>Back to Home</Link>
        </button>
      </div>
    </section>
  );
};

export default Error;
