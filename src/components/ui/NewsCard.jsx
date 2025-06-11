import { Link } from 'react-router-dom'; // 1. Import Link

const NewsCard = ({ article }) => {
  return (
    <Link to={article.slug} className="group flex items-start gap-4">
      {/* Image Container: Make it a consistent size */}
      <div className="flex-shrink-0 w-28 h-20">
        <img 
          src={article.imageUrl} 
          alt={article.title} 
          className="w-full h-full object-cover rounded-md" 
        />
      </div>

      {/* Text Content */}
      <div className="flex-grow">
        <h3 className="text-l font-bold text-gray-800 group-hover:text-blue-600 transition-colors leading-tight">
          {article.title}
        </h3>
      </div>
    </Link>
  );
};

export default NewsCard;