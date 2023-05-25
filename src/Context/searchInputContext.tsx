import React, { useState, createContext, useEffect, ReactNode, FC } from 'react';

interface StringContext {
    search?: string;
    setSearch?: (param: string) => void;
  }

interface props {
  children?: ReactNode
  // any props that come into the component
}
export const SearchInputContext = createContext<StringContext>({});

const ContentContext: FC<props> = ({ children }) => {
  const [search, setSearch] = useState<string | undefined>('');
  
  return (
      <SearchInputContext.Provider value={{search, setSearch}} >
        {children}
      </SearchInputContext.Provider>
  )
}

export default ContentContext;