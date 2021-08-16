import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeCategories } from "../../../store/categoriesReducer";
import { NameData } from "../NameData";
import { CategoriesWrapper } from "./styles";

export const Categories = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categories);
  const onChangeCategories = (e) => {
    dispatch(changeCategories(e.target.value));
  };
  return (
    <CategoriesWrapper>
      <NameData for="categories">Categories</NameData>
      <select value={categories} onChange={onChangeCategories}>
        <option value="">all</option>
        <option value="Art">art</option>
        <option value="Biography">biography</option>
        <option value="Computers">computers</option>
        <option value="History">history</option>
        <option value="Medical">medical</option>
        <option value="Poetry">poetry</option>
      </select>
    </CategoriesWrapper>
  );
};
