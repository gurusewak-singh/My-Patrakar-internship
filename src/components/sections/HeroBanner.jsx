import React from 'react';
// 1. Import the single, complete banner image
import bannerImage from '/images/mahabharat-2024-banner.png';

const HeroBanner = () => {
  // You can change this URL to wherever the banner should link to
  const electionPageUrl = '/';  //loksabha-elections-2024

  return (
    <section className="w-full pt-3 px-2 md:px-8">
      <a 
        href={electionPageUrl} 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <img 
          src={bannerImage} 
          alt="महाभारत 2024 - लोकसभा चुनाव की सभी खबरें" 
          className="w-full h-auto rounded-lg shadow-md hover:opacity-90 transition-opacity"
        />
      </a>
    </section>
  );
};

export default HeroBanner;