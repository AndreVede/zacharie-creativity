import { createFilePath } from 'gatsby-source-filesystem';
import { GatsbyNode } from 'gatsby';
import * as path from 'path';

export const onCreateNode: GatsbyNode['onCreateNode'] = ({ node, getNode, actions }) => {
    const { createNodeField } = actions;
    if (node.internal.type === 'MarkdownRemark') {
        const slug = createFilePath({ node, getNode, basePath: `content` });
        createNodeField({
            node,
            name: `slug`,
            value: slug
        })
    }
}

export const createPages: GatsbyNode['createPages'] = async ({ graphql, actions }) => {
    const result = await graphql<Queries.Query>(`
        query {
            allMarkdownRemark {
                edges {
                        node {
                            fields {
                                slug
                            }
                        }
                }
            }
        }
    `);
    if (!result.errors) {
        const data = result.data;
        const template = path.resolve('./src/templates/Posts.tsx');
        const requestResult = data?.allMarkdownRemark.edges;
        requestResult?.forEach(({ node }, index) => {
            const slug = node.fields?.slug;
            actions.createPage({
                path: slug || `/post-${index + 1}/`,
                component: template,
                context: { slug: slug }
            })
        });
    } else {
        console.error("🚨  ERROR: Loading \"createPages\" query");
    }
}