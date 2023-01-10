import Cocktails from '../components/Cocktails';
import SearchForm from '../components/SearchForm';
import { motion as m } from 'framer-motion';
const Home = () => {
  return (
    <m.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.61, 1, 0.88, 1] }}
    >
      <SearchForm />
      <Cocktails />
    </m.div>
  );
};

export default Home;
