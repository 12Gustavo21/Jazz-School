import { styled } from "styled-components";

export const Button = styled.button`
    width: 12.5rem;
    height: 3rem;
    border: 2px solid #000;
    box-shadow: 4px 4px 0px 0px #1E1E1E;
    background: #ED4D1B;
    font: 500 1.25rem 'Roboto', sans-serif;
    color: #000;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
        background: #000;
        color: #fff;
        box-shadow: 0 0 2px 5px #1E1E1E;
    }

    &:active {
        transform: scale(0.9);
        background-color: #2E2E2E;
        box-shadow: 0 0 2px 5px #2E2E2E;
    }

@media only screen and (width <= 1024px) {
        width: 10rem;
        height: 2.5rem;
        font-size: 1rem;
}

@media only screen and (width <= 768px) {
        width: 12.5rem;
        height: 3rem;
        font-size: 1.25rem;	
}
`;