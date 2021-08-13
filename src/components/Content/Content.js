import React from "react";
import { useAppContext } from "../../core/context";
import { useShowBooks } from "../../hooks/useShowBooks";
import { Title } from "../ui/Title";
import { ContentWrapper } from "./styles";
import { ResultSearch } from "../ui/ResultSearch";
import { LoadingOutlined } from "@ant-design/icons";

export const Content = () => {
  let { book } = useAppContext();
  const [booksData, isLoading, error] = useShowBooks(book);
  return (
    <ContentWrapper>
      {isLoading ? (
        <LoadingOutlined style={{ fontSize: "36px" }} />
      ) : (
        <Title>Found {booksData?.totalItems} results</Title>
      )}
      {error && <Title>Что то не так</Title>}
      <ResultSearch booksData={booksData} />
    </ContentWrapper>
  );
};
