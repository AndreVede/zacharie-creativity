import * as React from 'react';
import styled from 'styled-components';
import { flexCenter } from '../styles-utils/styles-variables';
import { Link } from 'gatsby';

const HeaderContainer = styled.header`
    ${flexCenter('row')}
    background: ${(p) => p.theme.colors.dark};
    width: 100vw;
    height: 50px;
    font-size: large;
    color: white;
`;

interface HeaderProps {
    siteTitle: string;
    menuLinks: {
        name: string;
        link: string;
    }[];
}

const Header: React.FC<HeaderProps> = ({ siteTitle, menuLinks }) => {
    return (
        <HeaderContainer>
            <span>{siteTitle}</span>
            <ul>
                {menuLinks.map((menuLink, i) => (
                    <li key={i + '-link-header'}>
                        <Link to={menuLink.link}>{menuLink.name}</Link>
                    </li>
                ))}
            </ul>
        </HeaderContainer>
    );
};

export default Header;
