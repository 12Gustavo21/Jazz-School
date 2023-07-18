import React from 'react';

//Assets
import Piano from '../../assets/video/piano.mp4';

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

    div {
        width: 100%;
        height: 100%;
        display: grid;
        place-items: center;

        video {
            width: 30rem;
            height: 30rem;
            mix-blend-mode: multiply;
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
                    <div>
                        <video src={Piano} autoPlay loop muted></video>
                    </div>
                </section>
            </Main>
        </>
    )
}