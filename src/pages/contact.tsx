import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import Layout from '../templates/Layout';
import { SEO } from '../components/SEO';

const ContactPage: React.FC<PageProps> = ({ location }) => {
    return (
        <Layout location={location}>
            <h1>Contact</h1>
        </Layout>
    );
};

export default ContactPage;

export const Head: HeadFC = () => (
    <SEO
        title="Contact"
        description="Vous cherchez quelqu'un pour un projet ou vous souhaitez échanger sur le métier ? Contactez-moi ici."
    ></SEO>
);
