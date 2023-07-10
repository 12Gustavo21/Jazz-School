import { styled } from "styled-components";

export const Header = styled.header`
    width: 100%;
    height: 20vh;
    display: grid;
    place-items: center;

    @media only screen and (width <= 768px) {
        height: 35vh;
    }
`;

export const HeaderContainer = styled.section`
    width: 97%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 0.0625rem solid #000;
    border-top: none;
    padding: 0 6rem 0 3rem;

    @media only screen and (width <= 1024px) {
        padding: 0 3rem;
    }

    @media only screen and (width <= 768px) {
        padding: 2rem 0 2rem 0;
        flex-direction: column;
    }
`;

export const Logo = styled.div`
    width: 50%;
    height: 100%;
    display: grid;
    place-items: center;
    font: 900 2rem 'Roboto', sans-serif;
    text-transform: uppercase;
    user-select: none;

    @media only screen and (width <= 768px) {
        width: 100%;
    }
`;

export const NavigationBox = styled.div`
    width: 40%;
    height: 100%;

    @media only screen and (width <= 1024px) {
        width: 50%;
    }

    @media only screen and (width <= 768px) {
        width: 100%;
    }
`;

export const Navigation = styled.nav`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    padding-left: 3rem;

    ul {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-wrap: wrap;
        list-style: none;
        font: 500 1.25rem 'Roboto', sans-serif;
        li {
            cursor: pointer;
            position: relative;

            &::after {
                position: absolute;
                display: block;
                content: "";
                width: 100%;
                border-bottom: #ED4D1B 0.125rem solid;
                border-radius: 0.125rem;
                transform: scaleX(0);
                transform-origin: center;
                transition: transform 300ms ease-in-out;
            }

            &:hover::after {
                transform: scaleX(1);
            }

            &:hover {
                color: #ED4D1B;
            }
        }
    }

    @media only screen and (width <= 1024px) {
        padding-left: 0;
        ul {
            justify-content: space-evenly;
            font-size: 1rem;
            padding-left: 0;
        }
    }

    @media only screen and (width <= 768px) {
        ul {
            padding: 1rem 0;
            width: 55%;
            justify-content: center;
            gap: 1.5rem;
            font-size: 1.25rem;
        }
    }
`;

export const ButtonBox = styled.div`
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media only screen and (width <= 768px) {
        width: 100%;
    }
`;