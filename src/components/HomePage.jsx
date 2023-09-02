import React from 'react';
import HomePageText from "./HomePageText.jsx";
import HomePageImage from "./HomePageImage.jsx";

function HomePage() {
  return (
    
    <div className="flex">
    <div className="flex-1 ml-12">
        <HomePageText/>
    </div>
    <div className="flex-1 flex ml-1 mb-10 justify-center items-center">
        <HomePageImage/>
    </div>
</div>

    
  );
}
export default HomePage;