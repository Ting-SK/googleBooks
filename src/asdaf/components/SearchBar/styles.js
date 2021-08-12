import styled from "styled-components";
import {Media} from '../../lib/Theme'

export const Input = styled.input`
  width: 400px;
  height: 30px;
  font-size: 20px;
  background: #fff;
  color: #000;
  ${Media.mobile}{
    width: 90%
  }
`;

export const Form = styled.form`
${Media.mobile}{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%
}
`;