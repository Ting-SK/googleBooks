import React from "react";
import { useAppContext } from "../../../core/context";
import { Form, Input } from "./styles";

export const SearchBar = () => {
  const { value, setValue, setBook, book } = useAppContext();
  const onChange = (e) => {
    setValue(e.target.value.trim());
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setBook(value);
    setValue('')
  };
  console.log("value", value);
  console.log("book", book);
  return (
    <Form onSubmit={onSubmit}>
      <Input value={value} onChange={onChange} />
    </Form>
  );
};
