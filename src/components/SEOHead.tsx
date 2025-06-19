
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  countyName?: string;
  state?: string;
}

const SEOHead = ({ 
  title, 
  description, 
  keywords, 
  canonicalUrl, 
  ogImage,
  countyName,
  state 
}: SEOHeadProps) => {
  const defaultImage = "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=1200&h=630";
  const imageUrl = ogImage || defaultImage;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:site_name" content="Cozy Home Partners" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      {canonicalUrl && <meta name="twitter:url" content={canonicalUrl} />}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      
      {/* Structured Data */}
      {countyName && state && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Cozy Home Partners",
            "description": `We buy houses in ${countyName}, ${state} for cash! Fast, fair offers with no fees or closing costs.`,
            "url": canonicalUrl,
            "telephone": "",
            "email": "offer@cozyhomepartners.com",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": countyName.replace(" County", ""),
              "addressRegion": state,
              "addressCountry": "US"
            },
            "areaServed": countyName,
            "serviceType": "Cash Home Buying"
          })}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHead;
