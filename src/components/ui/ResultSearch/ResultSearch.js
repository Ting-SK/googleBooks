import React from "react";
import { ResultSearchWrapper } from "./styles";
import { Books } from "../Books";

export const ResultSearch = ({ booksData }) => {
  return (
    <ResultSearchWrapper>
      {booksData?.items?.map((item) => {
        return <Books item={item} key={item.id} />;
      })}
    </ResultSearchWrapper>
  );
};
