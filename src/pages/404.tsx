import * as React from 'react';
import { Link, HeadFC, PageProps } from 'gatsby';
import Layout from '../templates/Layout';
import { SEO } from '../components/SEO';

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <h1>Page not found</h1>
      <p>
        <Link to="/">Go home</Link>.
      </p>
    </Layout>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <SEO title="Not Found"></SEO>;
