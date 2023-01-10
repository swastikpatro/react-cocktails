import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Error from './pages/Error';
import SingleCocktail from './pages/SingleCocktail';
import SharedLayout from './pages/SharedLayout';
import Home from './pages/Home';
import { AppContextProvider } from './pages/AppContextProvider';

function App() {
  return (
    <>
      <AppContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<SharedLayout />}>
              <Route index element={<Home />} />
              <Route path='about' element={<About />} />
              <Route path='cocktail/:id' element={<SingleCocktail />} />
            </Route>
            <Route path='*' element={<Error />} />
          </Routes>
        </BrowserRouter>
      </AppContextProvider>
    </>
  );
}

export default App;
