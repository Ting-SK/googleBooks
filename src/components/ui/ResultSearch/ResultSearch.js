import React, { useRef } from "react";
import { ResultSearchWrapper } from "./styles";
import { Books } from "../Books";

export const ResultSearch = ({ booksData }) => {

  console.log("WTF", booksData.items);

  return (
    <ResultSearchWrapper >
      {booksData?.items?.map((item, id) => {
        return <Books item={item} key={item.id}/>;
      })}
    </ResultSearchWrapper>
  );
};
