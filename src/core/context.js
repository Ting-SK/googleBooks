import React, { useContext, useState } from "react";

const AppContext = React.createContext({});

export const AppProvider = (props) => {
  const [value, setValue] = useState("");
  const [sorting, setSorting] = useState("relevance");
  const [getCategories, setCategories] = useState("");
  const [book, setBook] = useState("");
  const [choosenBook, setChoosenBook] = useState("");

  let values = {
    value,
    setValue,
    sorting,
    setSorting,
    getCategories,
    setCategories,
    book,
    setBook,
    choosenBook,
    setChoosenBook,
  };
  return (
    <AppContext.Provider value={values}>{props.children}</AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
