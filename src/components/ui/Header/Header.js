import React from "react";
import { Filters } from "../Filters/Filters";
import { SearchBar } from "../../SearchBar";
import { HeaderWrapper, TitleHead } from "./styles";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <HeaderWrapper>
      <Link to="/" style={{ color: "#fff" }}>
        <TitleHead>Search for books</TitleHead>
      </Link>{" "}
      <SearchBar />
      <Filters />
    </HeaderWrapper>
  );
};
