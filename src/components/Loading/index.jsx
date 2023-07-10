import React from 'react';

//Assets
import Piano from '../../assets/gifs/piano.gif';

//Styles
import { styled } from 'styled-components';
import { GlobalStyle } from '../../assets/global/style';

const Main = styled.main`
    display: grid;
    place-items: center;
    width: 100%;
    height: 100vh;
    background: linear-gradient(90deg, #FFE7D1 0%, #FFF2E5 100%);

    p {
        font: bold 4rem 'Roboto', sans-serif;
        text-align: center;
        overflow: hidden; 
        border-right: .15em solid #ED4D1B;
        white-space: nowrap;
        margin: 0 auto;
        letter-spacing: .15em;
        animation: typing 1s steps(40, end), blink-caret 500ms step-end infinite;

        @keyframes typing {
            0% { 
                width: 0 
            }
            100% { 
                width: 100% 
            }
        }

        @keyframes blink-caret {
            0%, 100% { 
                border-color: transparent 
            }
            50% { 
                border-color: #ED4D1B; 
            }
        }
    }

    figure {
        width: 100%;
        height: 100%;
        display: grid;
        place-items: center;

        img {
            width: 20rem;
            height: 20rem;
        }
    }

    @media only screen and (width <= 900px) {
        p {
            font-size: 2rem;
        }
    }

    @media only screen and (width <= 500px) {
        p {
            font-size: 1.5rem;
        }
    }
`;

export default function index() {
    return (
        <>
            <GlobalStyle />
            <Main>
                <section>
                    <p>Carregando...</p>
                    <figure>
                        <img src={Piano} alt="Piano Video" />
                    </figure>
                </section>
            </Main>
        </>
    )
}