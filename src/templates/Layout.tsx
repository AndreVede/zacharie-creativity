import * as React from 'react';
import Header from '../components/Header';
import { GlobalStyle, flexCenter } from '../style-utils/styles-variables';
import Footer from '../components/Footer';
import styled, { ThemeProvider } from 'styled-components';
import { ThemeDefault } from '../style-utils/Themes';
import { useStaticQuery, graphql, PageProps } from 'gatsby';
import { cssBase } from '../style-utils/styles-base';

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
    return (
        <>
            <GlobalStyle />
            <ThemeProvider theme={ThemeDefault}>
                <Header siteTitle={data.site.siteMetadata.title} menuLinks={data.site.siteMetadata.menuLinks} />
                <Main>{children}</Main>
                <Footer siteTitle={data.site.siteMetadata.title} />
            </ThemeProvider>
        </>
    );
};

export default Layout;
