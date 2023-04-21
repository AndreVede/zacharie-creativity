import React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { graphql } from 'gatsby';
import Layout from './Layout';
import { SEO } from '../components/SEO';

const Posts = ({ data }: PageProps<Queries.MarkdownRemark>) => {
  return (
    <Layout>
      <h1>{data?.frontmatter?.title}</h1>
      {!!data && !!data.html && (
        <div dangerouslySetInnerHTML={{ __html: data.html }}></div>
      )}
    </Layout>
  );
};

export default Posts;

export const Head: HeadFC = () => <SEO title="Posts"></SEO>;

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
