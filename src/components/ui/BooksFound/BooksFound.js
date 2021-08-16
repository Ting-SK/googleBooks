import { LoadingOutlined, DoubleLeftOutlined } from "@ant-design/icons";
import React from "react";
import { Link, useParams } from "react-router-dom";
// import { useAppContext } from "../../../core/context";
import { useFindItem } from "../../../hooks/useFindItem";
import { Title } from "../Title";
import {
  About,
  BooksFoundWrapper,
  InfoAbout,
  PicContainer,
  PicShow,
} from "./styles";

export const BooksFound = () => {
  // let { isLoading, error } = useAppContext();
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
            />
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
