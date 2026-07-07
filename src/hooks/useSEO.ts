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
}: SEOMeta) {
  useEffect(() => {
    document.title = title;
    setMeta('description', description);
    setLink('canonical', canonical);
    setMeta('og:title', ogTitle || title, 'property');
    setMeta('og:description', ogDescription || description, 'property');
    setMeta('og:url', canonical, 'property');
    setMeta('og:type', ogType || 'website', 'property');
    if (ogImage) setMeta('og:image', ogImage, 'property');
    setMeta('twitter:title', ogTitle || title, 'name');
    setMeta('twitter:description', ogDescription || description, 'name');
    if (ogImage) setMeta('twitter:image', ogImage, 'name');
    if (articlePublishedTime) setMeta('article:published_time', articlePublishedTime, 'property');
    if (articleModifiedTime) setMeta('article:modified_time', articleModifiedTime, 'property');
  }, [title, description, canonical, ogTitle, ogDescription, ogImage, ogType, articlePublishedTime, articleModifiedTime]);
}
