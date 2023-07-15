import styled, { keyframes } from "styled-components";

export const SlideAnimationLeft = keyframes`
    0% {
        transform: translateX(-4rem);
        opacity: 0;
    }

    100% {
        transform: translateX(0%);
        opacity: 1;
    }
`;

export const SlideAnimationRight = keyframes`
    0% {
        transform: translateX(4rem);
        opacity: 0;
    }

    100% {
        transform: translateX(0%);
        opacity: 1;
    }
`;

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
    min-height: 20%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 0.0625rem solid #000;
    border-top: none;
    padding: 0 6rem 0 3rem;
    position: fixed;
    top: 0;
    box-shadow: ${props => props.showMenu ? '0 0 1.25rem #111' : 'none'};
    background: ${props => props.showMenu ? 'linear-gradient(90deg, #FFE7D1 0%, #FFF2E5 100%)' : 'none'};
    transform: ${props => props.hiddenMenu ? 'translateY(-100%)' : 'translateY(0)'};
    transition: all 300ms ease-in-out;
    z-index: 1;

    @media only screen and (width <= 1024px) {
        padding: 0 3rem;
    }

    @media only screen and (width <= 800px) {
        padding: 2rem 0 2rem 0;
        flex-direction: column;
    }
`;

export const Logo = styled.div`
    width: 25%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    user-select: none;
    text-transform: uppercase;
    padding-left: 1rem;
    animation: ${SlideAnimationLeft} 2s ease-in-out;
    
    h1 {
        font: 900 3em 'Roboto', sans-serif;
        cursor: pointer;
    }
    
    p {
        font: 900 1.45em 'Roboto', sans-serif;
        cursor: pointer;
    }

    @media only screen and (width <= 768px) {
        width: 100%;
        justify-content: center;
        align-items: center;
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
    animation: ${SlideAnimationRight} 2s ease-in-out;

    ul {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-wrap: wrap;
        list-style: none;
        font: 500 1.25em 'Roboto', sans-serif;
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
            font-size: 1em;
            padding-left: 0;
        }
    }

    @media only screen and (width <= 768px) {
        ul {
            padding: 1rem 0;
            width: 55%;
            justify-content: center;
            gap: 1.5rem;
            font-size: 1.25em;
        }
    }
`;

export const HeaderButtonBox = styled.div`
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: ${SlideAnimationRight} 2s ease-in-out;

    @media only screen and (width <= 1024px) {
        button {
            height: 2.5rem;
            font-size: 1em;
        }
    }

    @media only screen and (width <= 768px) {
        width: 100%;
    }
`;

export const Main = styled.main`
    width: 100%;
    min-height: 100vh;
    display: grid;
    place-items: center;
`;

export const MainContainer = styled.section`
    width: 97%;
    height: 100%;
    display: flex;
    flex-direction: column;
    border: 0.0625rem solid #000;
    border-top: ${props => props.hiddenMenu ? '0.0625rem solid #000' : 'none'};
`;

export const MainAnnouncement = styled.div`
    width: 100%;
    height: 120vh;
    display: flex;
    padding: 3rem 0 10rem;
    border-bottom: 0.0625rem solid #000;
`;

export const TitleBox = styled.div`
    width: 100%;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: ${SlideAnimationLeft} 2s ease-in-out;

    h2 {
        width: 80%;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction: column;
        font: 900 4em/105% 'Roboto', sans-serif;

        span {
            color: #ED4D1B;
        }
    }
`;

const dash = keyframes`
    0% {
        transform: translateX(0);
    }
    50% {
        transform: translateX(.5rem);
    }
    100% {
        transform: translateX(0);
    }
`;
export const Dashes = styled.img`
    width: 2.8rem;
    height: 2.8rem;
    object-fit: contain;
    position: absolute;
    left: 26rem;
    top: 19rem;
    animation: ${dash} 1.5s linear infinite;
`;


export const Description = styled.div`
    width: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 2rem;
    animation: ${SlideAnimationLeft} 2.2s ease-in-out;

    p {
        width: 80%;
        height: 100%;
        font: 500 1.5em 'Roboto', sans-serif;
    }
`;

export const AnnouncementButtonBox = styled.div`
    width: 55%;
    height: 30%;
    padding-top: 1rem;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    animation: ${SlideAnimationLeft} 2.5s ease-in-out;
`;

const DashY = keyframes`
    0% {
        transform: translateY(0) rotate(0);
    }
    50% {
        transform: translateY(-.5rem) rotate(10deg);
    }
    100% {
        transform: translateY(0) rotate(0);
    }
`;

export const ArrowCurve = styled.img`
    width: 9rem;
    height: 9rem;
    object-fit: contain;
    position: absolute;
    left: 15rem;
    top: 43rem;
    animation: ${DashY} 1.5s linear infinite;
`;

export const MainFigure = styled.figure`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-bottom: 8rem;
    user-select: none;
    animation: ${SlideAnimationRight} 2s ease-in-out;

    img {
        width: 130%;
        height: 110%;
    }
`;

export const CardsBox = styled.div`
    width: 100%;
    height: 50vh;
    display: flex;
    justify-content: center;
    position: absolute;
    top: 63rem;
    right: 1rem;
`;

export const Cards = styled.div`
    width: 90%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
    flex-wrap: wrap;

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
            margin: 0;
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
    transition: all 1s ease-in-out, margin 0.5s ease-in-out;
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
        font: 500 1.1em 'Roboto', sans-serif;
    }
`;

const ArrowAnimation = keyframes`
    0% {
        transform: translateX(0);
    }
    50% {
        transform: translateX(.5rem);
    }
    100% {
        transform: translateX(0);
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
        animation: ${ArrowAnimation} 2s linear infinite;
    }
`;

export const CursersBox = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const CursersAnouncement = styled.div`
    width: 80%;
    height: 70%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    padding-top: 15rem;

    h2 {
        font: 900 4em 'Roboto', sans-serif;
        text-align: center;
        transition: all 1s ease-in-out;
        
        span {
            color: #ED4D1B;
        }
    }
    
    button {
        transition: all 1s ease-in-out;
    }
`;

export const Footer = styled.footer`
    width: 100%;
    height: 50vh;
    display: grid;
    place-items: center;
`;

export const FooterContainer = styled.section`
    width: 97%;
    height: 100%;
    display: flex;
    border: 0.0625rem solid #000;
    border-top: none;
    padding: 2rem 5rem;
`;

export const FooterAbout = styled.div`
    width: 30%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    transition: all 1s ease-in-out;
`;

export const FooterAboutLogo = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    user-select: none;
    text-transform: uppercase;
    
    h1 {
        font: 900 2.5em 'Roboto', sans-serif;
        cursor: pointer;
    }
    
    p {
        font: 900 1.2em 'Roboto', sans-serif;
        cursor: pointer;
    }
`;

export const FooterAboutDescription = styled.div`
    width: 80%;
    height: 50%;

    p {
        font: 500 1.25em 'Roboto', sans-serif;
    }
`;

export const FooterNavigation = styled.div`
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const FooterNavigationList = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 1s ease-in-out;

    ul {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: flex-start;
        flex-direction: column;
        list-style: none;

        li {
            font: 500 1.25em 'Roboto', sans-serif;
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
`;

export const FooterContact = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    transition: all 1s ease-in-out;

    h3 {
        font: 500 1.5em 'Roboto', sans-serif;
    }
`;

export const FooterContactForm = styled.form`
    width: 100%;
    height: 65%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    gap: 2rem;

    input {
        width: 85%;
        height: 3rem;
        border: 0.125rem solid #000;
        background: #FFF;
        box-shadow: 0.25rem 0.25rem 0 0 #000;
        padding: 0 1rem;
        font: 500 1.25em 'Roboto', sans-serif;
        outline: none;
    }
`;