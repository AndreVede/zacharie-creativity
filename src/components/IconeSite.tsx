import { StaticQueryDocument, graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';

interface IconeSiteProps {
    height?: number;
    width?: number;
}

const IconeSite: React.FC<IconeSiteProps> = ({ height, width }) => {
    const query: StaticQueryDocument = graphql`
        query {
            allSitePlugin(filter: { name: { regex: "/gatsby-plugin-manifest/" } }) {
                nodes {
                    pluginOptions
                }
            }
            allFile(filter: {absolutePath: {regex: "/\\w*\\.svg|\\w*\\.png|\\w*\\.webp/"}}) {
                nodes {
                publicURL
                name
                absolutePath
                }
            }
        }
    `;

    const imgQuery = useStaticQuery(query);
    const testURL = imgQuery.allSitePlugin?.nodes[0]?.pluginOptions?.icon;

    const srcImg: string = imgQuery.allFile.nodes.find(
        (item: { publicURL?: string; absolutePath?: string; name?: string }) => {
            if (item.absolutePath) {
                const path = item.absolutePath.split('/');
                const testPath = testURL.split('/');
                return path[path.length - 1] === testPath[testPath.length - 1];
            }
        }
    )?.publicURL;

    return <img src={srcImg} alt="site icon" height={height} width={width} />;
};

export default IconeSite;
