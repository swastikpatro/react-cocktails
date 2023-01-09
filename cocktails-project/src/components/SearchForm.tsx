import { useEffect, useRef } from 'react';
import useDebounce from '../useDebounce';
const SearchForm = ({
  newSearchText,
}: {
  newSearchText: (text: string) => void;
}) => {
  const searchInputRef = useRef<HTMLInputElement>(null!);
  const debounce = useDebounce();
  useEffect(() => {
    searchInputRef.current.focus();
  }, []);

  function handleChange() {
    newSearchText(searchInputRef.current.value.trim());
  }
  return (
    <form className='search' onSubmit={(e) => e.preventDefault()}>
      <div className='search-form'>
        <div className='form-control'>
          <label htmlFor='search'>Enter the cocktail name:</label>
          <input
            ref={searchInputRef}
            type='text'
            name='search'
            id='search'
            autoComplete='off'
            onChange={debounce(handleChange, 500)}
          />
        </div>
      </div>
    </form>
  );
};

export default SearchForm;
