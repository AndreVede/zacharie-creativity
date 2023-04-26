import * as React from 'react';
import styled from 'styled-components';
import { flexCenter } from '../style-utils/styles-variables';

const BannerContainer = styled.div`
    ${flexCenter()}
`;

interface BannerProps {
    imgSrc: string;
    imgAlt: string;
    bannerMessage?: string;
}

const Banner: React.FC<BannerProps> = ({ imgSrc, imgAlt, bannerMessage }) => {
    return (
        <BannerContainer>
            <img src={imgSrc} alt={imgAlt} />
            {bannerMessage && <span className="banner-text">{bannerMessage}</span>}
        </BannerContainer>
    );
};

export default Banner;
