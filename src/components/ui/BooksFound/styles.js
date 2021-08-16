import styled from "styled-components";

export const BooksFoundWrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 100%;
  min-height: 325px;
`;
export const PicContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background: gray;
  padding: 20px;
  width: 40%;
  height: auto;
`;

export const PicShow = styled.img`
  width: 100%;
  height: auto;
`;
export const InfoAbout = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 20px 10px;
  width: 70%;
  height: 100%;
`;
export const About = styled.p`
  font-size: 14px;
  text-decoration: ${(props) => (props.isDecorate ? "underline" : "none")};
  color: #000;
  margin: 15px 0;
`;
