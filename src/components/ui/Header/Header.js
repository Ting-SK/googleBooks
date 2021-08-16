import React from "react";
import { Filters } from "../Filters/Filters";
import { SearchBar } from "../../SearchBar";
import { HeaderWrapper, TitleHead } from "./styles";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeValue } from "../../../store/valueReducer";
import { changeBookName } from "../../../store/bookNameReducer";

export const Header = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const onClick = () => {
    dispatch(changeValue(" "));
    dispatch(changeBookName(" "));
    history.push("/");
  };
  return (
    <HeaderWrapper>
      <Link to="/" style={{ color: "#fff" }} onClick={onClick}>
        <TitleHead>Search for books</TitleHead>
      </Link>{" "}
      <SearchBar />
      <Filters />
    </HeaderWrapper>
  );
};
