import { useEffect } from 'react';

interface SEOMeta {
  title: string;
  description: string;
  canonical: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  articlePublishedTime?: string;
  articleModifiedTime?: string;
  robots?: string;
  author?: string;
  keywords?: string[];
  twitterCard?: 'summary' | 'summary_large_image';
}

function setMeta(name: string, content: string, attr: 'name' | 'property' = 'name') {
  let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement;
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.content = content;
}

function removeMeta(name: string, attr: 'name' | 'property' = 'name') {
  document.querySelector(`meta[${attr}="${name}"]`)?.remove();
}

function setLink(rel: string, href: string) {
  let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;
  if (!el) {
    el = document.createElement('link');
    el.rel = rel;
    document.head.appendChild(el);
  }
  el.href = href;
}

export function useSEO({
  title,
  description,
  canonical,
  ogTitle,
  ogDescription,
  ogImage,
  ogType,
  articlePublishedTime,
  articleModifiedTime,
  robots = 'index, follow',
  author = 'Priya Darshani',
  keywords,
  twitterCard = 'summary_large_image',
}: SEOMeta) {
  useEffect(() => {
    document.title = title;
    setMeta('description', description);
    setMeta('robots', robots);
    setMeta('author', author);
    if (keywords?.length) setMeta('keywords', keywords.join(', '));
    else removeMeta('keywords');
    setLink('canonical', canonical);
    setMeta('og:title', ogTitle || title, 'property');
    setMeta('og:description', ogDescription || description, 'property');
    setMeta('og:url', canonical, 'property');
    setMeta('og:type', ogType || 'website', 'property');
    if (ogImage) setMeta('og:image', ogImage, 'property');
    else removeMeta('og:image', 'property');
    setMeta('twitter:card', twitterCard);
    setMeta('twitter:title', ogTitle || title);
    setMeta('twitter:description', ogDescription || description);
    if (ogImage) setMeta('twitter:image', ogImage);
    else removeMeta('twitter:image');
    if (articlePublishedTime) setMeta('article:published_time', articlePublishedTime, 'property');
    else removeMeta('article:published_time', 'property');
    if (articleModifiedTime) setMeta('article:modified_time', articleModifiedTime, 'property');
    else removeMeta('article:modified_time', 'property');
  }, [
    articleModifiedTime,
    articlePublishedTime,
    author,
    canonical,
    description,
    keywords,
    ogDescription,
    ogImage,
    ogTitle,
    ogType,
    robots,
    title,
    twitterCard,
  ]);
}
