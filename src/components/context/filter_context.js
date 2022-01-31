import { createContext, useState } from 'react';

export const FilterContext = createContext();

export function FilterProvider({ children }) {
  const [filterCategory, setFilterCategory] = useState({
    category: '',
    checked: false,
  });
  const [filterStart, setFilterStart] = useState({
    Start: '',
    checked: false,
  });
  return (
    <FilterContext.Provider
      value={{ filterCategory, setFilterCategory, filterStart, setFilterStart }}
    >
      {children}
    </FilterContext.Provider>
  );
}
