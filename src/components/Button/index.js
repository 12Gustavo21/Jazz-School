import React from 'react';

//Styles
import * as S from './style';

export default function index(props) {
    return (
        <>
            <S.Button {...props}>
                {props.text}
            </S.Button>
        </>
    )
}
