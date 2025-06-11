import { useState, useEffect } from 'react';
import { fetchFeaturedSections, fetchNewsForCategory } from '../services/api';

// Import all the components we need
import HeroBanner from '../components/sections/HeroBanner';
import SectionHeader from '../components/ui/SectionHeader';
import GridNewsSection from '../components/sections/GridNewsSection';
import TopNewsSection from '../components/sections/TopNewsSection';
import AdPlaceholder from '../components/sections/AdPlaceholder';

const HomePage = () => {
  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadPageData = async () => {
      try {
        setLoading(true);
        // Step 1: Fetch the main sections
        const baseSections = await fetchFeaturedSections();

        if (baseSections.length > 0) {
          // Step 2: Create a promise to fetch news for EACH section
          const newsFetchPromises = baseSections.map(section =>
            fetchNewsForCategory(section.categoryId)
          );
          
          // Step 3: Wait for all news fetches to complete concurrently
          const allNewsLists = await Promise.all(newsFetchPromises);

          // Step 4: Combine the sections with their fetched news lists
          const populatedSections = baseSections.map((section, index) => ({
            ...section,
            list: allNewsLists[index] // Assign the fetched news list
          }));

          setSections(populatedSections);
        }
        
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadPageData();
  }, []);

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading news...</div>;
  }

  if (error) {
    return <div className="flex justify-center items-center h-screen text-red-500">Error: {error}</div>;
  }

  return (
    <main className="bg-gray-100 pb-10">
      <HeroBanner />
      <AdPlaceholder />

      {sections.map((section, index) => {
        // Use TopNewsSection for the first item, GridNewsSection for the rest
        const SectionComponent = index === 0 ? TopNewsSection : GridNewsSection;
        
        return (
          <section key={section.id} className="container mx-auto px-4">
            <SectionHeader title={section.title} />
            <SectionComponent
              featuredArticle={section.featured}
              articles={section.list}
            />
          </section>
        );
      })}
    </main>
  );
};

export default HomePage;