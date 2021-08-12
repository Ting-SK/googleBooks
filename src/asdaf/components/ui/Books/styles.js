import styled from "styled-components";
import { Media } from "../../../lib/Theme";

export const BooksFound = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 20px;
  width: 300px;
  height: 450px;
  background: #fafafa;
  ${Media.mobile} {
    margin: 10px 0;
    width: 250px;
    height: 350px;
  }
`;
export const BooksPic = styled.img`
  width: 200px;
  height: 250px;
  margin-bottom: 30px;
  ${Media.mobile} {
    margin-bottom: 20px;
    width: 150px;
    height: 200px;
  }
`;
export const SubTitle = styled.p`
  font-size: 10px;
  text-decoration: ${(props) => (props.isDecorate ? "underline" : "none")};
  color: gray;
`;
