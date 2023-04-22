import * as React from 'react';
import Header from '../components/Header';
import { GlobalStyle } from '../styles-utils/styles-variables';

interface LayoutProps {
    children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <GlobalStyle />
            <Header />
            <main>{children}</main>
        </>
    );
};

export default Layout;
