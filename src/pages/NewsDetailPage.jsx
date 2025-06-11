import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchNewsById } from '../services/api';

const NewsDetailPage = () => {
  const { newsId } = useParams(); // Get the 'newsId' from the URL
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadArticle = async () => {
      try {
        setLoading(true);
        const data = await fetchNewsById(newsId);
        setArticle(data);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    loadArticle();
  }, [newsId]); // Re-run the effect if the newsId changes

  if (loading) {
    return <div className="text-center p-10">Loading article...</div>;
  }

  if (error) {
    return <div className="text-center p-10 text-red-500">Error: {error}</div>;
  }

  if (!article) {
    return <div className="text-center p-10">Article not found.</div>;
  }

  return (
    <div className="container mx-auto p-4 md:p-8">
      <Link to="/" className="text-blue-600 hover:underline mb-6 inline-block">← Back to Home</Link>
      
      <h1 className="text-3xl md:text-4xl font-bold mb-4">{article.title}</h1>
      <p className="text-gray-500 mb-6">In <span className="font-semibold text-gray-700">{article.category}</span></p>

      <img src={article.imageUrl} alt={article.title} className="w-full md:w-2/3 mx-auto rounded-lg shadow-lg mb-8" />

      <div 
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: article.fullDescriptionHtml }}
      />
    </div>
  );
};

export default NewsDetailPage;