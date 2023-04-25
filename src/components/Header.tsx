import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { flexCenter, fontMonserrat } from '../styles-utils/styles-variables';

const HeaderContainer = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    align-content: center;

    padding: 0 30px;

    background: ${(p) => p.theme.colors.dark};
    height: 50px;
    font-size: large;
    color: white;
`;

const Nav = styled.nav`
    ${flexCenter()}
    margin: 0;
`;
const ListNav = styled.ul`
    ${flexCenter('row')}
    gap: 10px;
    margin: 0;
    & li {
        list-style: none;
        margin: 0;
    }
`;

const LinkNavHeader = styled(Link).attrs<LinkNavProps>((p) => ({
    weight: p.weight || 'regular',
    size: p.size || '18px',
}))`
    color: white;
    ${(p: LinkNavProps) => fontMonserrat(p.weight)}
    font-size: ${(p: LinkNavProps) => p.size};
    text-decoration: none;

    &.activePage {
        text-decoration: underline;
    }
`;

interface LinkNavProps {
    readonly weight: string;
    readonly size: string;
}
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
            <Nav>
                <ListNav>
                    {menuLinks.map((menuLink, i) => (
                        <li key={i + '-link-header'}>
                            <LinkNavHeader activeClassName="activePage" to={menuLink.link} {...Link.arguments}>
                                {menuLink.name}
                            </LinkNavHeader>
                        </li>
                    ))}
                </ListNav>
            </Nav>
        </HeaderContainer>
    );
};

export default Header;
