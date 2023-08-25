import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { flexCenter, fontMonserrat } from '../style-utils/styles-variables';
import IconeSite from './IconeSite';
import ThemePicker from './ThemePicker';

const HeaderContainer = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    align-content: center;

    padding: 5px 30px;

    background: ${(p) => p.theme.colors.dark};
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
    text-transform: uppercase;

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

const SubBlock = styled.div`
    ${flexCenter('row')}
    gap: 15px;
`;
const TitleBlock = styled(SubBlock)``;

const Header: React.FC<HeaderProps> = ({ siteTitle, menuLinks }) => {
    return (
        <HeaderContainer>
            <TitleBlock>
                <Link to="/">
                    <IconeSite height={40} width={40} />
                </Link>
                <span>{siteTitle}</span>
            </TitleBlock>
            <SubBlock>
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
                <ThemePicker></ThemePicker>
            </SubBlock>
        </HeaderContainer>
    );
};

export default Header;
