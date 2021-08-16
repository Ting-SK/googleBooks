import React from "react";
import "antd/dist/antd.css";
import { Pagination } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { useShowBooks } from "../../hooks/useShowBooks";
import { Title } from "../ui/Title";
import { ContentWrapper } from "./styles";
import { ResultSearch } from "../ui/ResultSearch";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { changePageIndex } from "../../store/pageIndexReducer";

export const Content = () => {
  const dispatch = useDispatch();
  const pageIndex = useSelector((state) => state.pageIndex.pageIndex);
  const bookName = useSelector((state) => state.bookName.bookName);
  const [booksData, isLoading, error] = useShowBooks(bookName);
  const totalItems = booksData?.totalItems;
  const onChangeIndex = (current) => {
    if (totalItems % 40 === 0) {
      dispatch(changePageIndex(current * 40));
    } else {
      dispatch(changePageIndex((current - 1) * 40));
    }
  };
  return (
    <>
      <ContentWrapper>
        {isLoading ? (
          <LoadingOutlined style={{ fontSize: "36px" }} />
        ) : (
          <Title>Found {booksData?.totalItems} results</Title>
        )}
        {error && <Title>Что то не так</Title>}
        <ResultSearch booksData={booksData} />
        <Pagination
          onChange={onChangeIndex}
          defaultCurrent={pageIndex}
          pageSizeOptions={[40]}
          defaultPageSize="40"
          size="small"
          total={booksData?.totalItems}
        />
      </ContentWrapper>
    </>
  );
};
