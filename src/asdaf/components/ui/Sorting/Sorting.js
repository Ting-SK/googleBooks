import React from "react";
import { useAppContext } from "../../../core/context";
import { NameData } from "../NameData";
import { SortingWrapper } from "./styles";

export const Sorting = () => {
  const {sorting, setSorting} = useAppContext()
  const onChangeSorting = (e) => {
    setSorting(e.target.value);
  };
  console.log("sorting", sorting);
  return (
    <SortingWrapper>
      <NameData for="sorting">Sorting by</NameData>
      <select value={sorting} onChange={onChangeSorting}>
        <option value="relevance">relevance</option>
        <option value="newest">newest</option>
      </select>
    </SortingWrapper>
  );
};
