import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const Cursor = styled.div`
    position: fixed;
    width: ${props => (props.size ? '6rem' : '3rem')};
    height: ${props => (props.size ? '6rem' : '3rem')};
    border: 0.0625rem solid #000;
    border-radius: 50%;
    transition: width 0.3s, height 0.3s;
    pointer-events: none;
    overflow: hidden;
    z-index: 1000;
`;

export default function CustomCursor({ size }) {
    const cursorRef = useRef(null);

    useEffect(() => {
        const cursorElement = cursorRef.current;

        const handleMouseMove = event => {
            const { clientX, clientY } = event;
            const mouseX = clientX - cursorElement.clientWidth / 2;
            const mouseY = clientY - cursorElement.clientHeight / 2;
            cursorElement.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
        };

        const handleClick = () => {
            cursorElement.style.backgroundColor = 'rgb(237 77 27 / 50%)';
            cursorElement.style.borderColor = 'rgb(237 77 27 / 50%)';

            setTimeout(() => {
                cursorElement.style.backgroundColor = 'transparent';
                cursorElement.style.borderColor = '#000';
            } , 100);
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('click', handleClick);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('click', handleClick);
        };
    }, []);

    return <Cursor size={size} ref={cursorRef} />;
}
