//simple list used in state news section

import ListNewsItem from '../ui/ListNewsItem';

const ListNewsSection = ({ articles }) => {
  return (
    <div className="py-0 px-0 flex flex-col gap-1">
      {articles.map((article) => (
        <ListNewsItem key={article.id} article={article} />
      ))}
    </div>
  );
};

export default ListNewsSection;