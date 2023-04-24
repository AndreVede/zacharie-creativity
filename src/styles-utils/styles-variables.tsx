import { SimpleInterpolation, createGlobalStyle, css } from 'styled-components';

const breakPoints = {
    desktop: 992,
    touchPad: 700,
    minPhone: 300,
};

export const flexCenter = (direction?: string, justifyContent?: string) => {
    return css`
        display: flex;
        flex-direction: ${typeof direction !== 'undefined' ? direction : 'column'};
        align-items: center;
        align-content: center;
        justify-content: ${typeof justifyContent !== 'undefined' ? justifyContent : 'center'};
    `;
};

export const phone = (content: SimpleInterpolation) => {
    return css`
        @media all and (max-width: ${breakPoints.touchPad - 1}px) {
            ${content}
        }
    `;
};

export const touchPad = (content: SimpleInterpolation) => {
    return css`
        @media all and (min-width: ${breakPoints.touchPad}px) and (max-width: ${breakPoints.desktop - 1}px) {
            ${content}
        }
    `;
};

export const fontMonserrat = (weight: string) =>
    ({
        light: {
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 300,
        },
        regular: {
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 400,
        },
        medium: {
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 500,
        },
        bold: {
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 700,
        },
    }[weight]);

export const GlobalStyle = createGlobalStyle`
    body {
        ${flexCenter()}
        ${fontMonserrat('regular')}
        font-size: 12px;
        margin: 0;
        padding: 0;
        min-width: 300px;
    }
`;
