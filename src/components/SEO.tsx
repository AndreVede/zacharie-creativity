import React, { ReactNode } from 'react';
import { useSiteMetadata } from '../hooks/use-site-metadata';

interface SEOProps {
    title?: string;
    description?: string;
    lang?: string;
    pathname?: string;
    children?: ReactNode;
}

export const SEO: React.FC<SEOProps> = ({ title, description, pathname, lang, children }) => {
    const {
        title: defaultTitle,
        description: defaultDescription,
        author,
        siteUrl,
        lang: defaultLang,
    } = useSiteMetadata();
    const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        url: `${siteUrl}${pathname || ``}`,
        author: author,
        lang: lang || defaultLang,
    };

    return (
        <>
            <html lang={seo.lang} />
            <title>{seo.title}</title>
            <meta name="description" content={seo.description} />
            <meta name="author" content={seo.author} />
            {children}
        </>
    );
};
