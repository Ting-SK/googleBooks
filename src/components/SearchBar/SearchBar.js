import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { changeBookName } from "../../store/bookNameReducer";
import { changeValue } from "../../store/valueReducer";
import {
  Form,
  Input,
  FindBtn,
  FindBtnContainerBottom,
  FindBtnContainerTop,
} from "./styles";

export const SearchBar = () => {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.value.value);

  const history = useHistory();

  const onChange = (e) => {
    dispatch(changeValue(e.target.value));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(changeBookName(value));
    history.push("/");
  };
  return (
    <Form onSubmit={onSubmit}>
      <Input value={value} onChange={onChange} />
      <FindBtnContainerTop>
        <FindBtnContainerBottom>
          <FindBtn>Найти</FindBtn>
        </FindBtnContainerBottom>
      </FindBtnContainerTop>
    </Form>
  );
};
