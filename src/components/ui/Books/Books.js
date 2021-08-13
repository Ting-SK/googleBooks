import React from "react";
import { Bookswrapper, BooksPic, SubTitle } from "./styles";
import { Title } from "../Title";
import { useAppContext } from "../../../core/context";
import { Link } from "react-router-dom";

export const Books = ({ item }) => {
  return (
    <Link to={`/book/${item.id}`}>
      <Bookswrapper>
        <BooksPic src={item.volumeInfo.imageLinks?.smallThumbnail} />
        <div>
          <SubTitle isDecorate>{item.volumeInfo.categories}</SubTitle>
          <Title>{item.volumeInfo.title}</Title>
          <SubTitle>{item.volumeInfo.authors}</SubTitle>
        </div>
      </Bookswrapper>
    </Link>
  );
};
