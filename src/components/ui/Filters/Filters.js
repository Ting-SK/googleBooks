import React from "react";
import { Categories } from "../Categories";
import { Sorting } from "../Sorting";
import { FiltersWrapper } from "./styles";

export const Filters = () => {
  return (
    <FiltersWrapper>
      <Categories />
      <Sorting/>
    </FiltersWrapper>
  );
};
