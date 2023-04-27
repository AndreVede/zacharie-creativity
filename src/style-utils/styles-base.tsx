import { css } from 'styled-components';

const title = (level: number) => {
    if (level <= 6 && level > 0) {
        return css`
            font-size: ${(-1 / -level + 0.5) * 1.5 * 20}px;
            color: ${(p) => (level === 1 ? p.theme.colors.primary : p.theme.colors.secondary)};
        `;
    }
};

export const cssBase = css`
    h1 {
        ${title(1)}
    }
    h2 {
        ${title(2)}
    }
    h3 {
        ${title(3)}
    }
    h4 {
        ${title(4)}
    }
    h5 {
        ${title(5)}
    }
    h6 {
        ${title(6)}
    }
    background: ${(p) => p.theme.colors.background};
    color: ${(p) => p.theme.colors.text};
`;
