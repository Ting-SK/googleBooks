import styled from "styled-components";
import { Media } from "../../../lib/Theme";

export const FiltersWrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 440px;
  color: #000;
  ${Media.mobile} {
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 300px;
    height: 100px;
  }
`;
