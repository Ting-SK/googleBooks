import React from "react";
import { Filters } from "../Filters/Filters";
import { SearchBar } from "../SearchBar/SearchBar";
import { HeaderWrapper, TitleHead } from "./styles";

export const Header = () => {
  return (
    <HeaderWrapper>
      <TitleHead>Search for books</TitleHead>
      <SearchBar />
      <Filters />
    </HeaderWrapper>
  );
};
