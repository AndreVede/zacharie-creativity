import * as React from 'react';
import Header from '../components/Header';
import { GlobalStyle, flexCenter } from '../style-utils/styles-variables';
import Footer from '../components/Footer';
import styled, { ThemeProvider } from 'styled-components';
import * as Themes from '../style-utils/Themes';
import { useStaticQuery, graphql, PageProps } from 'gatsby';
import { cssBase } from '../style-utils/styles-base';
import DeveloperMessage from '../components/Bonus/DeveloperMessage';
import { config } from '@fortawesome/fontawesome-svg-core';
import useLocalStorage from '../hooks/use-localStorage';
// Disable the auto CSS insertion
config.autoAddCss = false;

export const ThemeContext = React.createContext<{
    theme: string;
    setTheme: React.Dispatch<React.SetStateAction<string>>;
}>({
    theme: '',
    setTheme: () => {
        return '';
    },
});

interface LayoutProps {
    location?: PageProps['location'];
    children?: React.ReactNode;
}

const Main = styled.main`
    ${flexCenter('column', 'flex-start')}
    gap: 10px;
    ${cssBase}
`;

const Layout: React.FC<LayoutProps> = ({ location, children }) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    menuLinks {
                        link
                        name
                    }
                }
            }
        }
    `);

    const [themeStored, setThemeStored] = useLocalStorage('theme', 'ThemeDefault');

    const [theme, setTheme] = React.useState<string>(themeStored);

    React.useEffect(() => {
        setThemeStored(theme);
    }, [theme]);

    return (
        <>
            <GlobalStyle />
            <ThemeContext.Provider value={{ theme, setTheme }}>
                <ThemeProvider theme={Themes[theme as keyof typeof Themes]}>
                    <Header siteTitle={data.site.siteMetadata.title} menuLinks={data.site.siteMetadata.menuLinks} />
                    <Main>
                        <DeveloperMessage />
                        {children}
                    </Main>
                    <Footer siteTitle={data.site.siteMetadata.title} />
                </ThemeProvider>
            </ThemeContext.Provider>
        </>
    );
};

export default Layout;
