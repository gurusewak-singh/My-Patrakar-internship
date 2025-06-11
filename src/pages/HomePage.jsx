// Make sure this import is now working
import AdPlaceholder from '../components/sections/AdPlaceholder';
import GridNewsSection from '../components/sections/GridNewsSection';
import HeroBanner from '../components/sections/HeroBanner';
import TopNewsSection from '../components/sections/TopNewsSection'; // <-- 1. Import the new component
import { 
  topNews, 
  entertainmentNews, 
  upNews, 
  stateNews, 
  sportsNews,
  indiaNews // <-- Add this import
} from '../data/mockNewsData';
import SectionHeader from '../components/ui/SectionHeader'; // Import SectionHeader
import CategoryTabs from '../components/ui/CategoryTabs';   // Import CategoryTabs
import ListNewsSection from '../components/sections/ListNewsSection.jsx'; // <-- Add this import
import SimpleGridNewsSection from '../components/sections/SimpleGridNewsSection.jsx'; // <-- Add this import

const HomePage = () => {
  // A simple array for the "State" category tabs
  const stateCategories = ["All", "उत्तर प्रदेश", "उत्तराखंड", "गुजरात", "छत्तीसगढ़", "दिल्ली", "बिहार", "मध्य प्रदेश", "राजस्थान", "राज्य"];

  return (
    <main className="bg-gray-100 pb-10">
      <HeroBanner />

      {/* --- MODIFIED Top News Section --- */}
      <section className="w-full px-2 md:px-8 pt-6">
        <SectionHeader title="टॉप न्यूज" />
        <TopNewsSection 
          featuredArticle={topNews.featured} 
          articles={topNews.list} 
        />
      </section>
      
      {/* --- MODIFIED Uttar Pradesh Section --- */}
      <section className="w-full px-2 md:px-8">
        <SectionHeader title="उत्तर प्रदेश">
          <CategoryTabs categories={upNews.categories} defaultTab="उत्तर प्रदेश" />
        </SectionHeader>
        <GridNewsSection 
          featuredArticle={upNews.featured} 
          articles={upNews.list}
          variant="even"
        />
      </section>

      <div className="w-full px-2 md:px-8">
        <AdPlaceholder />
      </div>

      {/* --- NEW State News Section --- */}
      <section className="w-full px-2 md:px-8">
        <SectionHeader title="राज्य">
          <CategoryTabs categories={stateCategories} defaultTab="All" />
        </SectionHeader>
        <ListNewsSection articles={stateNews} />
      </section>

      {/* --- NEW Sports News Section --- */}
      <section className="w-full px-2 md:px-8">
        <SectionHeader title="खेल" />
        <ListNewsSection articles={sportsNews} />
      </section>

      {/* --- MODIFIED Entertainment Section --- */}
      <section className="w-full px-2 md:px-8">
        <SectionHeader title="मनोरंजन" />
        <GridNewsSection
          featuredArticle={entertainmentNews.featured}
          articles={entertainmentNews.list}
          variant="even"
          featuredCardType="overlay"
        />
      </section>

      {/* --- NEW India News Section --- */}
      <section className="w-full px-2 md:px-8 mt-6">
        <SectionHeader title="भारत" />
        <SimpleGridNewsSection articles={indiaNews} />
      </section>
    </main>
  );
};

export default HomePage;