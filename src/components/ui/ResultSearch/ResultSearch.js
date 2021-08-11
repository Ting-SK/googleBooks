import React from "react";
import { Title } from "../Title";
import { BooksFound, BooksPic, ResultSearchWrapper, SubTitle } from "./styles";

export const ResultSearch = ({ booksData }) => {
  console.log("WTF", booksData.items);
  return (
    <ResultSearchWrapper>
      {booksData?.items?.map((item, id) => {
        return (
          <BooksFound key={item.id}>
            <BooksPic src={item.volumeInfo.imageLinks.smallThumbnail} />
            <div>
              <SubTitle isDecorate>{item.volumeInfo.categories}</SubTitle>
              <Title>{item.volumeInfo.title}</Title>
              <SubTitle>{item.volumeInfo.authors}</SubTitle>
            </div>
          </BooksFound>
        );
      })}
    </ResultSearchWrapper>
  );
};
