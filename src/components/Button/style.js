import { styled } from "styled-components";

export const Button = styled.button`
  width: ${(props) => props.width};
  height: 3rem;
  border: 0.125rem solid #000;
  box-shadow: 0.25rem 0.25rem 0 0 #1e1e1e;
  background: #ed4d1b;
  font: 500 1.25rem "Roboto", sans-serif;
  color: #000;
  text-transform: uppercase;
  transition: all 1s ease-in-out !important;
  cursor: pointer;

  &:hover {
    box-shadow: 0.8125rem 0.875rem 0 -0.6875rem #1e1e1e;
  }

  &:active {
    box-shadow: 0.5rem 0.5rem 0 0 #1e1e1e;
  }
`;
