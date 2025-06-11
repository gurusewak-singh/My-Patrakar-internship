import FeaturedNewsCardHorizontal from '../ui/FeaturedNewsCardHorizontal';
import SimpleGridNewsSection from './SimpleGridNewsSection'; // Reusing our simple grid!

const TopNewsSection = ({ featuredArticle, articles }) => {
  return (
    <div className="py-6">
      {/* Block 1: The featured article */}
      <FeaturedNewsCardHorizontal article={featuredArticle} />

      {/* Block 2: The grid of other news articles */}
      <SimpleGridNewsSection articles={articles} />
    </div>
  );
};

export default TopNewsSection;