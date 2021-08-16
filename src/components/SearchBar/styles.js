import styled from "styled-components";
import { Media } from "../../lib/Theme";

export const Input = styled.input`
  width: 400px;
  height: 30px;
  font-size: 20px;
  background: #fff;
  color: #000;
  ${Media.mobile} {
    width: 90%;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 70px;
  align-items: center;
  width: 90%;
`;

export const FindBtn = styled.button`
  width: 100px;
  color: #fafafa;
  background: gray;
  &:active {
    opacity: 0.5;
    background: rgb(22, 22, 22);
  }
`;

export const FindBtnContainerBottom = styled.div`
  &::before {
    display: block;
    content: "";
    position: absolute;
    border: 2px solid #fafafa;
    border-right-color: transparent;
    border-top-color: transparent;
    width: 7px;
    height: 7px;
    bottom: 0;
    left: 0;
    z-index: 2;
  }
  &::after {
    display: block;
    content: "";
    position: absolute;
    border: 2px solid #fafafa;
    border-left-color: transparent;
    border-top-color: transparent;
    width: 7px;
    height: 7px;
    bottom: 0;
    right: 0;
    z-index: 2;
  }
`;

export const FindBtnContainerTop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;

  &::before {
    display: block;
    content: "";
    position: absolute;
    border: 2px solid #fafafa;
    border-right-color: transparent;
    border-bottom-color: transparent;
    width: 7px;
    height: 7px;
    top: 0;
    left: 0;
    z-index: 2;
  }

  &::after {
    display: block;
    content: "";
    position: absolute;
    border: 2px solid #fafafa;
    border-left-color: transparent;
    border-bottom-color: transparent;
    width: 7px;
    height: 7px;
    top: 0;
    right: 0;
    z-index: 2;
  }
  //
`;
