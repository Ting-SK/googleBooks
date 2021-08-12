import React from "react";
import { BooksFound, BooksPic, SubTitle } from "./styles";
import { Title } from "../Title";

export const Books = ({item}) => {
  return(
  <BooksFound key={item.id.toString()}>
    <BooksPic src={item.volumeInfo.imageLinks?.smallThumbnail} />
    <div>
      <SubTitle isDecorate>{item.volumeInfo.categories}</SubTitle>
      <Title>{item.volumeInfo.title}</Title>
      <SubTitle>{item.volumeInfo.authors}</SubTitle>
    </div>
  </BooksFound>
  )};
