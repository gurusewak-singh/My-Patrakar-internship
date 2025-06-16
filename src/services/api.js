import axios from 'axios';

const BASE_URL = 'https://customer.mypatrakar.com/api/v1';
const IMAGE_BASE_URL = 'https://customer.mypatrakar.com';

const API_CONFIG = {
  headers: {
    'X-Custom-Token': 'aaaaa' // Your custom auth token
  }
};

/**
 * ADAPTER 1: Transforms a single news article from the 'news-by-category' API.
 */
const transformNewsArticle = (apiArticle) => {
  // Check if the URL is already absolute or relative, then build the full path.
  const imageUrl = apiArticle.news_img_url.startsWith('http')
    ? apiArticle.news_img_url
    : IMAGE_BASE_URL + apiArticle.news_img_url;
  
  // Create a plain text summary by stripping HTML tags and truncating.
  const summary = apiArticle.news_description_html.replace(/<[^>]*>?/gm, '').substring(0, 150) + '...';

  return {
    id: apiArticle.news_id,
    title: apiArticle.news_headline,
    summary: summary,
    imageUrl: imageUrl,
    category: apiArticle.news_category_name,
    slug: `/news/${apiArticle.news_id}`
  };
};

/**
 * ADAPTER 2: Transforms a featured section, keeping its category ID.
 */
const transformFeaturedSection = (apiSection) => {
  return {
    id: apiSection.section_id,
    title: apiSection.section_title,
    categoryId: apiSection.category_id, // We need this to fetch the news
    featured: {
      id: apiSection.section_id,
      title: apiSection.section_title,
      summary: `News and updates from the world of ${apiSection.category}. More details coming soon.`,
      imageUrl: apiSection.web_section_image,
      category: apiSection.category,
    },
    list: [] // This will be populated later
  };
};

/**
 * API FUNCTION 1: Fetches the main featured sections.
 */
export const fetchFeaturedSections = async () => {
  try {
    const response = await axios.post(`${BASE_URL}/featured-section`, {}, API_CONFIG);
    if (response.data && response.data.status_code === 200) {
      return response.data.response.map(transformFeaturedSection);
    }
    return [];
  } catch (error) {
    console.error("Error fetching featured sections:", error);
    throw new Error('Could not fetch page sections.');
  }
};

/**
 * API FUNCTION 2: Fetches all news articles for a given category ID.
 */
export const fetchNewsForCategory = async (categoryId) => {
  try {
    const body = { category: categoryId };
    const response = await axios.post(`${BASE_URL}/news-by-category`, body, API_CONFIG);
    if (response.data && response.data.status_code === 200) {
      // The actual news list is nested inside another 'response' object
      const newsList = response.data.response.response || response.data.response;
      return newsList.map(transformNewsArticle);
    }
    return [];
  } catch (error) {
    console.error(`Error fetching news for category ${categoryId}:`, error);
    return []; // Return empty array on error so the page doesn't crash
  }
};

/**
 * API FUNCTION 3: Fetches a single news article by its ID.
 */
export const fetchNewsById = async (newsId) => {
  try {
    const body = new URLSearchParams();
    body.append('news_id', newsId);
    body.append('ip', '0.0.0.0'); // Using a placeholder IP as shown in Postman

    const config = {
      headers: {
        'X-Custom-Token': 'aaaaa', // Your custom auth token
        'Content-Type': 'application/x-www-form-urlencoded' // Specify the content type
      }
    };
    
    const response = await axios.post(`${BASE_URL}/news-by-id`, body, config);

    if (response.data && response.data.status_code === 200 && response.data.response.length > 0) {
      // The API returns an array, so we take the first element
      const transformedArticle = transformNewsArticle(response.data.response[0]);
      // Also grab the full HTML description for the detail page
      transformedArticle.fullDescriptionHtml = response.data.response[0].news_description_html;
      return transformedArticle;
    }
    return null; // Return null if no article is found
  } catch (error) {
    console.error(`Error fetching news for ID ${newsId}:`, error);
    throw new Error('Could not fetch the article.');
  }
};