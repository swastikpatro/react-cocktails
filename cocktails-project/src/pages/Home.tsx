import { useState } from 'react';
import Cocktails from '../components/Cocktails';
import SearchForm from '../components/SearchForm';

const Home = () => {
  const [searchText, setSearchText] = useState('');

  function newSearchText(text: string) {
    setSearchText(text);
  }
  return (
    <div>
      <SearchForm newSearchText={newSearchText} />
      <Cocktails text={searchText} />
    </div>
  );
};

export default Home;
