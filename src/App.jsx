
import React from 'react';
import { AppContextProvider } from './context';
import Products from './components/Uzbek/Uzbek_tours/Products/Products';
import Choose from './components/Uzbek/Uzbek_tours/Choose/Choose';
const App = () => {
  return (
    <AppContextProvider>
      <Choose/>
      <Products />
      <Products />
    </AppContextProvider>
  );
};
export default App;