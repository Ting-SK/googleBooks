import styled from "styled-components";
import { Media } from "../../../lib/Theme";
import headerBack from "../../../assets/background/library.jpg";

export const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background: url('${headerBack}') center /100% auto no-repeat;
  height: 250px;
  color: #fafafa;
  ${Media.mobile}{
    background: url('${headerBack}') 0 0 /auto 100% no-repeat;

  }}
`;

export const TitleHead = styled.h2`
  font-size: 36px;
  font-weight: bold;
  color: #fff;
  ${Media.mobile} {
    font-size: 24px;
  }
`;
