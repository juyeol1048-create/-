import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
}

export default function SEO({ 
  title = 'Phoneplus 2013 | Premium Design Agency', 
  description = '로고 디자인 및 홈페이지 제작 전문 에이전시. 당신의 브랜드 가치를 높이는 창조적 디자인 솔루션을 제공합니다.',
  keywords = '로고 디자인, 홈페이지 제작, 브랜딩, 웹 디자인, 에이전시, Phoneplus 2013',
  ogImage = 'https://picsum.photos/seed/agency/1200/630'
}: SEOProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content="website" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
}
