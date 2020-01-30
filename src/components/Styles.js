import styled from "styled-components";
import colors from "../Colors";

export const Button = styled.button`
  width: 65%;
  align-self: center;
  background-color: ${colors.secondaryTwo} !important;
  &:hover {
    background-color: ${colors.bright}  !important;
  }
`;

