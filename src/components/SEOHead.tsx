import { Helmet } from 'react-helmet-async';
import { SITE, absoluteUrl } from '@/lib/site';

interface SEOHeadProps {
  title: string;
  description: string;
  /** Site-relative path, e.g. "/our-process". Used for canonical + og:url. */
  path: string;
  ogImage?: string;
  noindex?: boolean;
  /** One or more schema.org objects to emit as JSON-LD. */
  jsonLd?: object | object[];
}

const SEOHead = ({ title, description, path, ogImage, noindex, jsonLd }: SEOHeadProps) => {
  const url = absoluteUrl(path);
  const image = ogImage || SITE.ogImage;
  const schemas = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta
        name="robots"
        content={
          noindex
            ? 'noindex, follow'
            : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
        }
      />
      {!noindex && <link rel="canonical" href={url} />}

      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={`${SITE.name} logo`} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(s)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEOHead;
