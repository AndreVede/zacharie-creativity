import * as React from 'react';
import styled from 'styled-components';
import { flexCenter } from '../style-utils/styles-variables';
import IconeSite from './IconeSite';
import { Link } from 'gatsby';

interface FooterProps {
    siteTitle: string;
}

const FooterContainer = styled.footer`
    ${flexCenter('row')}
    gap: 20px;
    height: 100px;
    padding: 50px 30px;
    background: ${(p) => p.theme.colors.veryDark};
    color: white;
    & span {
        font-size: 25px;
    }
`;

const Footer: React.FC<FooterProps> = ({ siteTitle }) => {
    return (
        <FooterContainer>
            <Link to="/">
                <IconeSite height={55} width={55} />
            </Link>
            <span>{siteTitle}</span>
        </FooterContainer>
    );
};

export default Footer;
