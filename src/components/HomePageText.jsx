import React from 'react';

function HomePageText() {
  return (
     <div className="bg-white p-8 rounded-lg max-w-xl mx-auto mt-10 mb-12 " >
      <h1 className="text-3xl font-semibold mb-4 text-gray-800">Generate music with AI</h1>
      <p className="text-gray-600 leading-relaxed">
        Our AI product leverages state-of-the-art musicGen LLM to deliver unparalleled performance and insights. Designed with user experience in mind, it seamlessly integrates into your workflow, empowering you to achieve more with less effort.
      </p>
      <button className="mt-6 px-6 py-2 rounded-full bg-green-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
        Get Started
      </button>
    </div>
  );
}

export default HomePageText;
