import React, { useContext, useState } from "react";

const AppContext = React.createContext({});

export const AppProvider = (props) => {
  const [value, setValue] = useState("");
  const [sorting, setSorting] = useState("relevance");
  const [categories, setCategories] = useState("all");
  const [book, setBook] = useState("");

  let values = {
    value,
    setValue,
    sorting,
    setSorting,
    categories,
    setCategories,
    book,
    setBook,
  };
  return (
    <AppContext.Provider value={values}>{props.children}</AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
