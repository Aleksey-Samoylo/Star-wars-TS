import React, { useState, useEffect, createContext, FC } from 'react';

interface StringContext {
    search?: string;
    setSearch?: (param: string) => void;
  }
  
// export const SearchInputContext = React.createContext<StringContext>({});

type props = {
  children?: React.ReactNode
}

export const ContentContext: Props = ({ children: React.ReactNode }) => {
  return (
    <div>

    </div>
  )
}