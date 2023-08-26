import * as React from 'react';
import { HeadFC, PageProps, graphql } from 'gatsby';
import Layout from '../templates/Layout';
import { SEO } from '../components/SEO';
import Banner from '../components/Banner';

const IndexPage: React.FC<PageProps<Queries.Query>> = ({ data, location }) => {
    const title = data.site?.siteMetadata?.title;
    return (
        <Layout location={location}>
            <h1>{title}</h1>
            <Banner
                imageQuery={data}
                altImg="Voie Lactée"
                bannerMessage="Développons nos idées, libérons la créativité."
            />
            <h2>Présentations</h2>
            <p>Je suis Zacharie Boisnard, Développeur FullStack pour vous servir. ;)</p>
        </Layout>
    );
};

export default IndexPage;

export const Head: HeadFC = () => <SEO title="Home Page"></SEO>;

export const query = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
        file(absolutePath: { regex: "/images/voie-lactee.jpg/" }) {
            childrenImageSharp {
                gatsbyImageData(
                    quality: 100
                    formats: WEBP
                    placeholder: BLURRED
                    layout: FULL_WIDTH
                    transformOptions: { fit: COVER }
                )
            }
        }
    }
`;
