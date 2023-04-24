import { graphql, useStaticQuery } from 'gatsby';

export const useSiteMetadata = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    description
                    author
                    siteUrl
                    lang
                }
            }
        }
    `);
    return data.site.siteMetadata;
};
