import styled from "styled-components";
import { Media } from "../../../lib/Theme";

export const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 250px;
  background: gray;
  color: #fafafa;
`;

export const TitleHead = styled.h2`
  font-size: 36px;
  font-weight: bold;
  color: #fff;
  ${Media.mobile} {
    font-size: 24px;
  }
`;
