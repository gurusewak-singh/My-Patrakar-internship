import { Link } from 'react-router-dom';

const ListNewsItem = ({ article }) => {
  return (
    <Link to={article.slug} className="group block pb-6 mb-6 last:pb-0 last:mb-0">
      <div className="flex flex-col sm:flex-row gap-6 items-start">
        {/* Image Container: Increased width and added more responsive control */}
        <div className="flex-shrink-0 w-full sm:w-1/3 md:w-80">
          <img 
            src={article.imageUrl} 
            alt={article.title} 
            className="w-full h-48 object-cover rounded-lg"
          />
        </div>
        
        {/* Text Content */}
        <div className="flex flex-col">
          {/* Category Tag */}
          {article.category && (
             <span className="inline-block bg-red-100 text-red-800 text-sm font-semibold px-2.5 py-1 rounded-full mb-3 self-start">
              {article.category}
            </span>
          )}
          {/* Headline: Increased font size and line height */}
          <h3 className="text-2xl font-bold text-gray-800 group-hover:text-blue-700 transition-colors mb-3 leading-snug">
            {article.title}
          </h3>
          {/* Summary Text: Increased font size and line height */}
          <p className="text-gray-600 text-base leading-relaxed hidden sm:block">
            {article.summary}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ListNewsItem;