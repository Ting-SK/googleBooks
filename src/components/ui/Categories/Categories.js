import React from "react";
import { useAppContext } from "../../../core/context";
import { NameData } from "../NameData";
import { CategoriesWrapper } from "./styles";

export const Categories = () => {
  const {categories, setCategories} = useAppContext();
  const onChangeCategories = (e) => {
    setCategories(e.target.value);
  };
  console.log("categories", categories);
  return (
    <CategoriesWrapper>
      <NameData for="categories">Categories</NameData>
      <select value={categories} onChange={onChangeCategories}>
        <option value="all" >
          all
        </option>
        <option value="art">art</option>
        <option value="biography">biography</option>
        <option value="computers">computers</option>
        <option value="history">history</option>
        <option value="medical">medical</option>
        <option value="poetry">poetry</option>
      </select>
    </CategoriesWrapper>
  );
};
