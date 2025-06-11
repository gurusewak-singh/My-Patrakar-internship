import { Link } from 'react-router-dom';

const FeaturedNewsOverlayCard = ({ article }) => {
  return (
    // The main container needs to be 'relative' to position the text inside it.
    <Link to={article.slug} className="group relative block w-full h-full">
      <img
        src={article.imageUrl}
        alt={article.title}
        className="w-full h-full object-cover rounded-lg"
      />
      {/* This div is for the dark gradient overlay at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-black via-black/70 to-transparent rounded-b-lg"></div>

      {/* This div holds the actual text, positioned absolutely at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
        {/* Category Tag */}
        {article.category && (
          <span className="inline-block bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded mb-2">
            {article.category}
          </span>
        )}
        {/* Headline */}
        <h2 className="text-xl font-bold leading-tight group-hover:underline">
          {article.title}
        </h2>
      </div>
    </Link>
  );
};

export default FeaturedNewsOverlayCard;