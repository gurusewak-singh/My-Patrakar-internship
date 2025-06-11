const FeaturedNewsCardHorizontal = ({ article }) => {
  return (
    <a href={article.slug} className="group block">
      <div className="flex flex-col md:flex-row gap-6 items-start">
        {/* Left Side: Image */}
        <div className="w-full md:w-5/12 flex-shrink-0">
          <img
            src={article.imageUrl}
            alt={article.title}
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>

        {/* Right Side: Text Content */}
        <div className="w-full md:w-7/12">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-800 group-hover:text-blue-700 transition-colors">
            {article.title}
          </h2>
          <p className="text-gray-600 text-base leading-relaxed">
            {article.summary}
          </p>
        </div>
      </div>
    </a>
  );
};

export default FeaturedNewsCardHorizontal;