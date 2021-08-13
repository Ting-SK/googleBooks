import styled from "styled-components";

export const BooksFoundWrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
    height: 70vh;
`;
export const PicContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background: gray;
  padding: 20px;
  width: 30%;
`;
export const PicShow = styled.img`
  width: 250px;
`;
export const InfoAbout = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: flex-start;
  justify-content: space-around;
  padding: 10px;
  width: 70%;

//   width: 300px;
`;
export const About = styled.p`
  font-size: 14px;
  text-decoration: ${(props) => (props.isDecorate ? "underline" : "none")};
  color: #000;
`;