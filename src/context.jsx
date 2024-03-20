
import React, { useState, useEffect, createContext, useContext } from 'react';

const AppContext = createContext();

const url = [
  {
    "id": 1,
    "image": 'https://eps.asialuxe.app/upload/iblock/1aa/hfz8am4t39kohjqg0of0qhq1zt56208k.webp',
    "body": "Саудовская Аравия - Умра"
  },
  {
    "id": 2,
    "image": 'https://eps.asialuxe.app/upload/iblock/c72/iky6wm0cilvdne2yi9v64qd9rdqk0mz7.jpg',
    "body": "Анталъя"
  },
  {
    "id": 3,
    "image": 'https://eps.asialuxe.app/upload/iblock/a52/uuvrkcko5ytezc2o5cbr98610l5w5po9.webp',
    "body": "Аланъя"
  },
  {
    "id": 4,
    "image": 'https://eps.asialuxe.app/upload/iblock/5cb/oszu4w9uuio4220e6hfj2j8gh4zfrwwr.jpg',
    "body": "Бодрум"
  },
  {
    "id": 5,
    "image": '	https://eps.asialuxe.app/upload/iblock/52e/r4r3lx8zao413l0hf1p7o4ls3r7hemlk.jpg',
    "body": "Анкара"
  },
  {
    "id": 6,
    "image": '	https://eps.asialuxe.app/upload/iblock/d97/i69lp9cich7hfjt2mvmztfa4vtoxly16.webp',
    "body": "Даламан"
  }
];

const AppContextProvider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(url);
  }, []);

  return (
    <AppContext.Provider value={data}>
      {children}
    </AppContext.Provider>
  );
};

const useData = () => {
  return useContext(AppContext);
};

export { AppContextProvider, useData };
