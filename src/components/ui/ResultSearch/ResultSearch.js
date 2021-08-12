import React from "react";
import { useAppContext } from "../../../core/context";
import { ResultSearchWrapper } from "./styles";
import { Books } from "../Books";

export const ResultSearch = ({ booksData }) => {
  let { choosenBook, setChoosenBook, getCategories } = useAppContext();
  const chooseBook = (e) => {
    e.preventDefault();
    setChoosenBook(e.target.datasetId);
  };

  console.log("WTF", booksData.items);
  return (
    <ResultSearchWrapper onClick={chooseBook}>
     {booksData?.items?.map((item, id) => {
    return <Books item={item}/>;
  })}
    </ResultSearchWrapper>
  );
};
