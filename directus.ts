import { createDirectus, rest } from '@directus/sdk';

export type Global = {
  slug: string;
  title: string;
  description: string;
};

type Author = {
  slug: string;
  name: string;
};

export type Page = {
  slug: string;
  title: string;
  content: string;
};

export type Post = {
  slug: string;
  image: string;
  title: string;
  content: string;
  author: Author;
  published_date: string;
};

type Schema = {
  global: Global;
  posts: Post[];
  pages: Page[];
};

export const directus = createDirectus<Schema>(
  'https://danielbulic-dev.directus.app',
).with(rest());
