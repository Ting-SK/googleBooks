import {  DoubleLeftOutlined } from "@ant-design/icons";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { useFindItem } from "../../../hooks/useFindItem";
import {
  About,
  BooksFoundWrapper,
  InfoAbout,
  PicContainer,
  PicShow,
} from "./styles";

export const BooksFound = () => {
  let idFinded = useParams().id;
  let [findItem] = useFindItem(idFinded);
  return (
    <BooksFoundWrapper>
      <PicContainer>
        <PicShow src={findItem?.volumeInfo?.imageLinks?.medium} />
      </PicContainer>
      <InfoAbout>
        <About isDecorate>
          <Link to="/">
            {" "}
            <DoubleLeftOutlined
              style={{ marginRight: "10px", fontSize: "20px" }}
            /><span>Назад</span>
          </Link>
          {findItem?.volumeInfo?.categories}
        </About>
        <About>{findItem?.volumeInfo?.title}</About>
        <About>{findItem?.volumeInfo?.authors}</About>
        <About>{findItem?.volumeInfo?.description}</About>
      </InfoAbout>
    </BooksFoundWrapper>
  );
};
