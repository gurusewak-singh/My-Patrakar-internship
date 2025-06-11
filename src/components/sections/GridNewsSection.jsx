//divided in two parts for(manoranjan section and Uttar Pradesh section)

import FeaturedNewsCard from '../ui/FeaturedNewsCard';
import FeaturedNewsOverlayCard from '../ui/FeaturedNewsOverlayCard'; // <-- Import the new card
import NewsCard from '../ui/NewsCard';

// Add a new 'featuredCardType' prop
const GridNewsSection = ({
  featuredArticle,
  articles,
  variant = 'asymmetric',
  featuredCardType = 'standard' // 'standard' or 'overlay'
}) => {

  const containerClasses = variant === 'even'
    ? 'md:grid-cols-2'
    : 'md:grid-cols-3';

  const leftColumnClasses = variant === 'even'
    ? ''
    : 'md:col-span-2';

  return (
    <div className={`grid grid-cols-1 ${containerClasses} gap-8 py-6`}>
      <div className={`${leftColumnClasses} h-full`}>
        {/* --- THIS IS THE KEY LOGIC --- */}
        {featuredCardType === 'overlay' ? (
          <FeaturedNewsOverlayCard article={featuredArticle} />
        ) : (
          <FeaturedNewsCard article={featuredArticle} />
        )}
      </div>

      {/* Removed border-l-2 and border-gray-200 from the right column */}
      <div className="flex flex-col gap-4 pl-6">
        {articles.map(article => (
          <NewsCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
};

export default GridNewsSection;