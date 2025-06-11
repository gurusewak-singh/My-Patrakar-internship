//for two column news ( bharat news section)

import NewsCard from '../ui/NewsCard';

const SimpleGridNewsSection = ({ articles }) => {
  return (
    <div className="py-6 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
      {articles.map((article) => (
        <NewsCard key={article.id} article={article} />
      ))}
    </div>
  );
};

export default SimpleGridNewsSection;