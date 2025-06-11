// Install react-router-dom: npm install react-router-dom
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NewsDetailPage from './pages/NewsDetailPage'; // We will create this next

function App() {
  return (
    <div className="bg-white font-sans"> {/* Assuming a default font */}
      <Routes>
        {/* Route for the homepage */}
        <Route path="/" element={<HomePage />} />
        
        {/* Route for the news detail page. ':newsId' is a dynamic parameter. */}
        <Route path="/news/:newsId" element={<NewsDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;