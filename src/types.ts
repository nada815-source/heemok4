export type Category = 'All' | 'Logo' | 'Fine Art' | 'Commercial Title';

export interface Work {
  id: string;
  title: string;
  category: Category;
  image: string;
  description: string;
  philosophy: string;
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  image: string;
}

export interface ContactForm {
  type: string;
  budget: string;
  schedule: string;
  details: string;
  name: string;
  email: string;
}
