import styled from "styled-components";

export const CardsBox = styled.div`
    width: 100%;
    height: 50vh;
    display: flex;
    justify-content: center;
    position: relative;

    @media only screen and (width <= 1304px) {
        height: 100vh;
    }
`;

export const Cards = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
    position: absolute;
    top: -7rem;
    gap: 1rem;

    article:nth-child(odd) {
        background-color: #ED4D1B;

        &:hover {
            margin-top: 2rem;
        }
    }
    
    article:nth-child(even) {
        background-color: #FF9A3C;
        margin-top: 2rem;

        &:hover {
            margin-top: 0;
        }
    }
`;

export const Card = styled.article`
    width: 19rem;
    height: 22rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 2rem 1rem 0 2rem;
    border: 0.125rem solid #000;
    box-shadow: 0.25rem 0.25rem 0 0 #000;
    transition: all 1s ease-in-out !important;
`;

export const CardHeader = styled.div`
    width: 100%;
    height: 30%;

    img {
        width: 3rem;
        height: 3rem;
    }
`;

export const CardBody = styled.div`
    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 1rem;

    h3 {
        font: 900 1.5em 'Roboto', sans-serif;
    }

    p {
        font: 500 1em 'Roboto', sans-serif;
    }
`;

export const CardFooter = styled.div`
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    img {
        width: 4rem;
        height: 4rem;
        object-fit: contain;
        cursor: pointer;
    }
`;