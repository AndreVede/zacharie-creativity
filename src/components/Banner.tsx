import * as React from 'react';
import styled from 'styled-components';
import { flexCenter, fontMonserrat } from '../style-utils/styles-variables';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';

const BannerContainer = styled.div`
    ${flexCenter()}
    position: relative;
    overflow: hidden;
    width: 96%;
    height: 200px;
    margin: 20px 0;
    border-radius: 50px;
    box-shadow: 0 0 0 5px rgba(0, 0, 0, 0.25), 0 5px 4px 2px rgba(0, 0, 0, 0.6);
    & .gatsby-image-wrapper {
        width: 100%;
        box-sizing: border-box;
    }
    & img {
        filter: brightness(70%);
    }
`;
const MessageBanner = styled.span`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 30px;
    ${fontMonserrat('medium')}
`;

interface BannerProps {
    bannerMessage?: string;
    imageQuery: Queries.Query;
    altImg: string;
}

const checkAndGetImage = (query: Queries.Query): IGatsbyImageData | null => {
    if (query.imageSharp) {
        return query.imageSharp?.gatsbyImageData;
    } else if (query.file && query.file.childrenImageSharp && query.file.childrenImageSharp[0]) {
        return query.file.childrenImageSharp[0].gatsbyImageData;
    } else return null;
};

const Banner: React.FC<BannerProps> = ({ bannerMessage, imageQuery, altImg }) => {
    console.log(imageQuery);
    const image = checkAndGetImage(imageQuery);

    return (
        <BannerContainer>
            {image && <GatsbyImage image={image} alt={altImg} />}
            {bannerMessage && <MessageBanner className="banner-text">{bannerMessage}</MessageBanner>}
        </BannerContainer>
    );
};

export default Banner;
