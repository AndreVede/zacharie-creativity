export interface Theme {
    name: string;
    colors: Colors;
}

export interface Colors {
    background: string;
    veryDark: string;
    dark: string;
    primary: string;
    secondary: string;
    tertiary: string;
    text: string;
}

export const ThemeDefault: Theme = {
    name: 'Default Dark',
    colors: {
        background: '#3d3131',
        veryDark: '#611010',
        dark: '#912626',
        primary: '#FE5656',
        secondary: '#00BCBC',
        tertiary: '#00ad09',
        text: '#fff',
    },
};

export const ThemeDefaultLight: Theme = {
    name: 'Default Light',
    colors: {
        background: '#d4b7b7',
        veryDark: '#611010',
        dark: '#912626',
        primary: '#FE5656',
        secondary: '#00BCBC',
        tertiary: '#00ad09',
        text: '#3b3939',
    },
};

export const ThemeHistoric: Theme = {
    name: 'Historic Dark',
    colors: {
        background: '#234b80',
        veryDark: '#4461FC',
        dark: '#3D81E0',
        primary: '#4FC2F7',
        secondary: '#3DD8E0',
        tertiary: '#44FCD2',
        text: '#fff',
    },
};
