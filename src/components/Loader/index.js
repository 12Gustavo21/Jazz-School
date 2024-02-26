import React from "react";

//Style-components
import styled, { keyframes } from "styled-components";

export default function index() {
  const spin = keyframes`
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  `;

  const Loader = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.5s ease-in-out;

    div {
      width: 3rem;
      height: 3rem;
      border: 0.5rem solid #ed4d1b;
      border-top: 0.5rem solid #ff9a3c;
      border-radius: 50%;
      animation: ${spin} 1s linear infinite;
    }
  `;

  return (
    <>
      <Loader>
        <div></div>
      </Loader>
    </>
  );
}
