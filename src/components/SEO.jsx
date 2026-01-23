import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({
    title,
    description,
    keywords,
    canonical,
    name = 'Kiran Motor Training School',
    type = 'website'
}) => {
    // Safe fallback for server-side rendering or initial load if window is undefined (though unlikely in standard SPA)
    const siteUrl = typeof window !== 'undefined' ? window.location.origin : '';
    const fullCanonical = canonical ? `${siteUrl}${canonical}` : (typeof window !== 'undefined' ? window.location.href : '');

    return (
        <Helmet>
            {/* Standard Metadata */}
            <title>{title} | {name}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            {fullCanonical && <link rel="canonical" href={fullCanonical} />}

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={`${title} | ${name}`} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={fullCanonical} />
            <meta property="og:site_name" content={name} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={`${title} | ${name}`} />
            <meta name="twitter:description" content={description} />
        </Helmet>
    );
};

export default SEO;
