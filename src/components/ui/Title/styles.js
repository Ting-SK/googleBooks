import styled from "styled-components";
import { Media } from "../../../lib/Theme";

export const TitleContainer = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin: 10px 0;
  ${Media.mobile}{
    font-size: 14px;
  }
`;