import Head from 'next/head';
import React, { forwardRef } from 'react';

type PropsPage = {
  children: JSX.Element,
  meta?: React.ReactNode,
  title: string,
  description?: string,
  keywords?: string[],
  author?: string,
  robots?: string,
  ogImage?: string,
  twitterHandle?: string,
};

const Page = forwardRef(({ children, meta, title, description, keywords, author, robots, ogImage, twitterHandle, ...other }: PropsPage, ref: any) => {
  const defaultDescription = "Your default description goes here";
  const defaultKeywords = ["your", "default", "keywords"];
  const defaultAuthor = "Your Name";
  const defaultRobots = "index, follow";

  return (
    <>
      <Head>
        <title>{title ? `${title} | Rent-House` : 'Rent-House'}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
        <meta name="description" content={description || defaultDescription} />
        <meta name="keywords" content={(keywords && keywords.join(', ')) || defaultKeywords.join(', ')} />
        <meta name="author" content={author || defaultAuthor} />
        <meta name="robots" content={robots || defaultRobots} />
        
        {/* Open Graph (Facebook) meta tags */}
        {ogImage && <meta property="og:image" content={ogImage} />}
        
        {/* Twitter meta tags */}
        {twitterHandle && <meta name="twitter:card" content="summary" />}
        {twitterHandle && <meta name="twitter:site" content={twitterHandle} />}
        
        {/* Add more social media meta tags as needed */}
        {meta}
      </Head>

      <div ref={ref} {...other}>
        {children}
      </div>
    </>
  );
});

Page.displayName = 'Page'
export default Page;
