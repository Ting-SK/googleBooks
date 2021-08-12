import React from "react";
import { useAppContext } from "../../../core/context";
import { NameData } from "../NameData";
import { CategoriesWrapper } from "./styles";

export const Categories = () => {
  const {getCategories, setCategories} = useAppContext();
  const onChangeCategories = (e) => {
    setCategories(e.target.value);
  };
  console.log("categories", getCategories);
  return (
    <CategoriesWrapper>
      <NameData for="categories">Categories</NameData>
      <select value={getCategories} onChange={onChangeCategories}>
        <option value="" >
          all
        </option>
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
