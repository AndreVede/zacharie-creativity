import React, { ReactNode } from 'react';
import { useSiteMetadata } from '../hooks/use-site-metadata';

interface SEOProps {
  title?: string;
  description?: string;
  pathname?: string;
  children?: ReactNode;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  pathname,
  children,
}) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    author,
    siteUrl,
  } = useSiteMetadata();
  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname || ``}`,
    author: author,
  };

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="author" content={seo.author} />
      {children}
    </>
  );
};
