import { ChangeEvent, useRef } from 'react';

function useDebounce() {
  const timeoutID = useRef<number>(null!);
  function debounce(
    fn: (e: ChangeEvent<HTMLInputElement>) => void,
    delay: number
  ) {
    return (...args: any[]) => {
      if (timeoutID.current) {
        clearTimeout(timeoutID.current);
      }
      // @ts-ignore
      timeoutID.current = setTimeout(() => {
        // @ts-ignore
        fn(...args);
      }, delay);
    };
  }

  return debounce;
}

export default useDebounce;
