import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { changeSorting } from "../../../store/sortingReducer";
import { NameData } from "../NameData";
import { SortingWrapper } from "./styles";

export const Sorting = () => {
  const dispatch = useDispatch();
  const sorting = useSelector((state) => state.sorting.sorting);
  const onChangeSorting = (e) => {
    dispatch(changeSorting(e.target.value));
  };
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
