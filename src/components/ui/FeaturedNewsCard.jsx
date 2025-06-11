import { Link } from 'react-router-dom';

const FeaturedNewsCard = ({ article }) => {
  return (
    <Link to={article.slug} className="block group">
      <img src={article.imageUrl} alt={article.title} className="w-full h-auto object-cover rounded-lg mb-2" />
      <h2 className="text-2xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
        {article.title}
      </h2>
      <p className="text-gray-600 text-sm">
        {article.summary}
      </p>
    </Link>
  );
};

export default FeaturedNewsCard;