import React from 'react';

//Styles
import * as S from './style';

export default function index(props) {
    return (
        <>
            <S.Button>
                {props.text}
            </S.Button>
        </>
    )
}
