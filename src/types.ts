export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  createdAt: number;
}

export interface Post {
  id: string;
  title: string;
  content: string;
  category: string;
  imageUrl?: string;
  createdAt: number;
}

export interface SiteSettings {
  title: string;
  description: string;
  keywords: string;
  contactEmail: string;
  contactPhone: string;
  address: string;
  socialLinks: {
    instagram?: string;
    facebook?: string;
    twitter?: string;
    github?: string;
  };
}
