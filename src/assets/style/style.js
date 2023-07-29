import styled from "styled-components";

export const Header = styled.header`
    width: 100%;
    height: 20vh;
    display: grid;
    place-items: center;

    @media only screen and (width <= 950px) {
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

    @media only screen and (width <= 1100) {
        padding: 0 3rem;
    }

    @media only screen and (width <= 950px) {
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
    
    h1 {
        font: 900 3em 'Roboto', sans-serif;
        cursor: pointer;
    }
    
    p {
        font: 900 1.45em 'Roboto', sans-serif;
        cursor: pointer;
    }

    @media only screen and (width <= 950px) {
        width: 100%;
        justify-content: center;
        align-items: center;
        padding: 0;

        h1 {
            font-size: 2.5em;
        }

        p {
            font-size: 1.25em;
        }
    }
`;

export const NavigationBox = styled.div`
    width: 40%;
    height: 100%;

    @media only screen and (width <= 1100) {
        width: 50%;
    }

    @media only screen and (width <= 950px) {
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

    @media only screen and (width <= 1100px) {
        padding-left: 0;

        ul {
            justify-content: space-evenly;
            font-size: 1em;
        }
    }

    @media only screen and (width <= 950px) {
        ul {
            padding: 1rem 0;
            width: 50%;
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

    @media only screen and (width <= 1100) {
        button {
            height: 2.5rem;
            font-size: 1em;
        }
    }

    @media only screen and (width <= 950px) {
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
    min-height: 100vh;
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

    h2 {
        width: 80%;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction: column;
        font: 900 4em/105% 'Roboto', sans-serif;

        span {
            color: #ED4D1B;
            position: relative;

            &::after {
                content: "";
                background-image: url(https://media.graphassets.com/GxD904bVRDSa8HiP7LsQ);
                position: absolute;
                top: -0.75rem;
                height: 2.25rem;
                width: 2.5rem;
            }
        }
    }

    @media only screen and (width <= 1100px) {
        h2 {
            font-size: 3em;
            width: 85%;
        }
    }
`;

export const Description = styled.div`
    width: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 2rem;

    p {
        width: 80%;
        height: 100%;
        font: 500 1.5em 'Roboto', sans-serif;
    }

    @media only screen and (width <= 1100px) {
        width: 80%;
        padding-left: 1rem;

        p {
            width: 85%;
            font-size: 1.25em;
        }
    }
`;

export const AnnouncementButtonBox = styled.div`
    width: 55%;
    height: 30%;
    padding-top: 1rem;
    display: flex;
    justify-content: center;
    align-items: flex-start;

    button {
        position: relative;
    }

    button::after {
        content: "";
        background: url(https://media.graphassets.com/toEbl0QNTf2irtvQAPtv) no-repeat;
        position: absolute;
        top: 6rem;
        left: 8rem;
        height: 9rem;
        width: 9rem;
    }

    @media only screen and (width <= 1100px) {
        width: 60%;
    }
`;

export const MainFigure = styled.figure`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-bottom: 8rem;
    user-select: none;

    img {
        width: 130%;
        height: 110%;
    }
`;

export const CursersBox = styled.div`
    width: 100%;
    height: 50vh;
    display: flex;
    justify-content: center;
    align-items: flex-start;

    @media only screen and (width <= 1304px) {
        height: 70vh;
        align-items: center;
    }
`;

export const CursersAnouncement = styled.div`
    width: 80%;
    height: 70%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;

    h2 {
        font: 900 4em 'Roboto', sans-serif;
        text-align: center;
        transition: all 1s ease-in-out;
        
        span {
            color: #ED4D1B;
        }
    }
`;

export const Footer = styled.footer`
    width: 100%;
    height: 50vh;
    display: grid;
    place-items: center;

    @media only screen and (width <= 1024px) {
        height: 90vh;
    }
`;

export const FooterContainer = styled.section`
    width: 97%;
    height: 100%;
    display: flex;
    border: 0.0625rem solid #000;
    border-top: none;
    padding: 2rem 5rem;

    @media only screen and (width <= 1024px) {
        flex-direction: column;
        padding: 0 1rem 1rem 2rem;
    }
`;

export const FooterAbout = styled.div`
    width: 30%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    transition: all 1s ease-in-out;

    @media only screen and (width <= 1024px) {
        width: 100%;
    }
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
    
    h2 {
        font: 900 2.5em 'Roboto', sans-serif;
        cursor: pointer;
    }
    
    p {
        font: 900 1.2em 'Roboto', sans-serif;
        cursor: pointer;
    }

    @media only screen and (width <= 1024px) {
        height: 100%;
    }
`;

export const FooterAboutDescription = styled.div`
    width: 80%;
    height: 50%;

    p {
        font: 500 1.25em 'Roboto', sans-serif;
    }

    @media only screen and (width <= 1024px) {
        width: 100%;
    }
`;

export const FooterNavigation = styled.div`
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media only screen and (width <= 1024px) {
        width: 100%;
    }
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

    @media only screen and (width <= 1024px) {
        padding: 2rem 0;

        ul {
            justify-content: flex-start;
            gap: 2rem;
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

    label {
        font: 500 1.5em 'Roboto', sans-serif;
    }

    @media only screen and (width <= 1024px) {
        width: 100%;
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

    @media only screen and (width <= 1024px) {
        height: 100%;
    }
`;