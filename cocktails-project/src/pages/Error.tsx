import { Link } from 'react-router-dom';
import { motion as m } from 'framer-motion';

const Error = () => {
  return (
    <m.section
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.61, 1, 0.88, 1] }}
      className='error-page section'
    >
      <div className='error-container'>
        <h1>Oops!, you reached the dead end</h1>
        <button className='btn btn-primary'>
          <Link to='/'>Back to Home</Link>
        </button>
      </div>
    </m.section>
  );
};

export default Error;
