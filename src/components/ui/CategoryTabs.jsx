import { useState } from 'react';

const CategoryTabs = ({ categories, defaultTab = "All" }) => {
  const [activeTab, setActiveTab] = useState(defaultTab);

  return (
    <div className="flex items-center space-x-4">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setActiveTab(category)}
          className={`pb-1 text-sm font-medium transition-colors
            ${activeTab === category
              ? 'border-b-2 border-white text-white' // Active style
              : 'text-gray-300 hover:text-white'      // Inactive style
            }
          `}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryTabs;