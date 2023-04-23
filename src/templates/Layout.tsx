import * as React from 'react';
import Header from '../components/Header';
import { GlobalStyle } from '../styles-utils/styles-variables';
import Footer from '../components/Footer';
import { ThemeProvider } from 'styled-components';
import { ThemeDefault } from '../styles-utils/Themes';
import { useStaticQuery, graphql } from 'gatsby';

interface LayoutProps {
    children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
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
    return (
        <>
            <GlobalStyle />
            <ThemeProvider theme={ThemeDefault}>
                <Header siteTitle={data.site.siteMetadata.title} menuLinks={data.site.siteMetadata.menuLinks} />
                <main>{children}</main>
                <Footer />
            </ThemeProvider>
        </>
    );
};

export default Layout;
