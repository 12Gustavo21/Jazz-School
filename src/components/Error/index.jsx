import React from 'react';

//Style
import { GlobalStyle } from '../../assets/global/style';
import styled from 'styled-components';

//Assets
import MusicalNoteError from '../../assets/img/musical-note-error.webp';

const Main = styled.main`
    display: grid;
    place-items: center;
    width: 100%;
    height: 100vh;
    background: linear-gradient(90deg, #FFE7D1 0%, #FFF2E5 100%);

    section {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        width: 100%;
        height: 100vh;

        p {
            font: bold 2rem 'Roboto', sans-serif;
            text-align: center;
            word-break: break-word;
        }

        @media only screen and (width <= 768px) {
            p {
                padding: 0 1rem;
            }
        }

        figure {
            width: 100%;
            height: 50%;
            display: flex;
            justify-content: center;
            align-items: center;

            img {
                width: 100%;
                height: 100%;
                object-fit: contain;
                object-position: top;
                mix-blend-mode: multiply;
            }
        }

        div {
            width: 100%;
            height: 10%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
    }
`;

export default function index() {
    return (
        <>
            <GlobalStyle />
            <Main>
                <section>
                    <div>
                        <p>Ops, algo deu errado :(</p>
                        <p>Tente novamente mais tarde</p>
                    </div>
                    <figure>
                        <img src={MusicalNoteError} alt="Musical Note Error" draggable='false' />
                    </figure>
                </section>
            </Main>
        </>
    )
}
