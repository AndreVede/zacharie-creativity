import React from 'react';
import type { HeadFC, HeadProps, PageProps } from 'gatsby';
import { graphql } from 'gatsby';
import Layout from './Layout';
import { SEO } from '../components/SEO';

const Posts: React.FC<PageProps<Queries.Query>> = ({ data, location }) => {
    const markdown = data.markdownRemark;
    return (
        <Layout location={location}>
            <h1>{markdown?.frontmatter?.title}</h1>
            {!!markdown && !!markdown.html && <div dangerouslySetInnerHTML={{ __html: markdown.html }}></div>}
        </Layout>
    );
};

export default Posts;

interface DataHead {
    markdownRemark?: {
        frontmatter?: {
            title?: string;
            description?: string;
        };
    };
}

export const Head: HeadFC = ({ data }: HeadProps<DataHead>) => {
    const markdown = data.markdownRemark;
    const title = markdown?.frontmatter?.title;
    const description = markdown?.frontmatter?.description;

    return <SEO title={title ? title : 'Post'} description={description}></SEO>;
};

export const query = graphql`
    query ($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
                description
            }
        }
    }
`;
