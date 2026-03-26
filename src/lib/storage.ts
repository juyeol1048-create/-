import { useState, useEffect } from 'react';
import { Project, Post, SiteSettings } from '../types';

const STORAGE_KEYS = {
  PROJECTS: 'p2013_projects',
  POSTS: 'p2013_posts',
  SETTINGS: 'p2013_settings',
};

const DEFAULT_PROJECTS: Project[] = [
  // ▼▼▼ 아래 각 항목의 'imageUrl' 부분에 직접 준비한 이미지 주소를 넣으세요 ▼▼▼
  {
    id: '1',
    title: '상담이 정말 친절하고 요금제 설명이 명확해서 믿음이 갔어요. 덕분에 좋은 가격에 구매했습니다.',
    category: '김*수 고객님',
    description: 'Galaxy S24 Ultra 구매',
    imageUrl: 'https://picsum.photos/seed/review1/800/600',
    createdAt: Date.now(),
  },
  {
    id: '2',
    title: '다른 곳보다 혜택이 확실히 좋네요. 사후 관리까지 챙겨주시는 모습에 감동했습니다.',
    category: '이*진 고객님',
    description: 'iPhone 15 Pro 구매',
    imageUrl: 'https://picsum.photos/seed/review2/800/600',
    createdAt: Date.now() - 86400000,
  },
];

const DEFAULT_SETTINGS: SiteSettings = {
  title: 'Phoneplus 2013 | 최적의 요금 설계',
  description: '당신의 사용 패턴에 꼭 맞는 최적의 요금을 설계해드립니다. Phoneplus 2013에서 합리적인 모바일 라이프를 시작하세요.',
  keywords: '휴대폰 성지, 갤럭시 S24, 아이폰 15, 요금제 설계, Phoneplus 2013',
  contactEmail: 'contact@phoneplus2013.com',
  contactPhone: '+82 02-1234-5678',
  address: '서울특별시 강남구 테헤란로 123',
  socialLinks: {
    instagram: 'https://instagram.com',
    facebook: 'https://facebook.com',
    twitter: 'https://twitter.com',
    github: 'https://github.com',
  },
};

export function useStorage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [posts, setPosts] = useState<Post[]>([]);
  const [settings, setSettings] = useState<SiteSettings>(DEFAULT_SETTINGS);

  useEffect(() => {
    const storedProjects = localStorage.getItem(STORAGE_KEYS.PROJECTS);
    const storedPosts = localStorage.getItem(STORAGE_KEYS.POSTS);
    const storedSettings = localStorage.getItem(STORAGE_KEYS.SETTINGS);

    if (storedProjects) setProjects(JSON.parse(storedProjects));
    else {
      setProjects(DEFAULT_PROJECTS);
      localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(DEFAULT_PROJECTS));
    }

    if (storedPosts) setPosts(JSON.parse(storedPosts));
    
    if (storedSettings) setSettings(JSON.parse(storedSettings));
    else {
      localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(DEFAULT_SETTINGS));
    }
  }, []);

  const saveProjects = (newProjects: Project[]) => {
    setProjects(newProjects);
    localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(newProjects));
  };

  const savePosts = (newPosts: Post[]) => {
    setPosts(newPosts);
    localStorage.setItem(STORAGE_KEYS.POSTS, JSON.stringify(newPosts));
  };

  const saveSettings = (newSettings: SiteSettings) => {
    setSettings(newSettings);
    localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(newSettings));
  };

  return {
    projects,
    posts,
    settings,
    saveProjects,
    savePosts,
    saveSettings,
  };
}
