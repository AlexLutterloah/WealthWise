import { React, createContext, useContext, useState, useEffect } from 'react';

// Create a context
const DataContext = createContext();

// Create a provider
export const DataProvider = ({ children }) => {
  const [numericValues, setNumericValues] = useState({
    assetSavings: 0,
    assetRothIRA: 0,
    assetTraditional: 0,
    assetInvestments: 0,
    assetAuto: 0,
    assetHouse: 0,
    assetOther: 0,
    liabilityPersonal: 0,
    liabilityAuto: 0,
    liabilityStudent: 0,
    liabilityMortgage: 0,
    liabilityOther: 0
  });

  const updateNumericValue = (variableName, value) => {
    setNumericValues(prevState => ({
      ...prevState,
      [variableName]: value,
    }));
  };

  useEffect(() => {
  }, [numericValues]);

  return (
    <DataContext.Provider value={{ numericValues, updateNumericValue }}>
      {children}
    </DataContext.Provider>
  );
};

// Custom hook to consume the context
export const useNumericValues = () => useContext(DataContext);