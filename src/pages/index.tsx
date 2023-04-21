import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import Layout from '../templates/Layout';
import { SEO } from '../components/SEO';

const IndexPage: React.FC<PageProps> = () => {
  return <Layout></Layout>;
};

export default IndexPage;

export const Head: HeadFC = () => <SEO title="Home Page"></SEO>;
