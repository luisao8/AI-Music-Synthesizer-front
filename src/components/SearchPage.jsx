import { useState } from "react";

function SearchPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [wavFileUrl, setWavFileUrl] = useState(null);
    const [duration, setDuration] = useState(10);
    const [isLoading, setIsLoading] = useState(false); // State for loading

    const handleInputChange = (e) => {
      setSearchTerm(e.target.value);
    };

    const handleDurationChange = (event) => {
        const selectedValue = event.target.value;
        setDuration(selectedValue);

        // Update the displayed value
        const durationDisplay = document.getElementById("durationValue");
        if (durationDisplay) {
            durationDisplay.textContent = selectedValue;
        }
    }

    const handleSearch = async (e) => {
      e.preventDefault();
      setIsLoading(true); // Start loading
      console.log("Searching for:", searchTerm);
      
      const data = { 
        "duration": duration,
        "prompt": searchTerm
      };

      try {
          let response = await fetch('http://localhost:5000/api/getsongs', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
          });
    
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
    
          const responseData = await response.json();
          let finalUrl = responseData.url;
          setWavFileUrl(finalUrl);
    
        } catch (error) {
          console.error("Error fetching WAV file:", error.message);
        } finally {
          setIsLoading(false); // End loading
        }
    };

    return (
        <div className="mt-12 flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold text-center text-black my-4">Generate magic with your prompts</h1>
    
            <h2 className="text-1xl font-medium text-black my-2">Duration (seconds):</h2>
            <input 
                type="range" 
                min="1" 
                max="20" 
                value={duration} 
                className="mb-2"
                onChange={handleDurationChange}
                id="duration"
            />
            <span id="durationValue">{duration}</span>

            <h2 className="text-1xl font-medium text-black my-2">Prompt:</h2>
            <form onSubmit={handleSearch} className="w-full flex flex-col items-center mb-7">
                <textarea 
                    rows="3" 
                    placeholder="Enter your prompt here..." 
                    className="w-2/4 p-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 mb-2"
                    id="textValue"
                    value={searchTerm}
                    onChange={handleInputChange}
                ></textarea>
                <button type="submit" className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700">Submit</button>
            </form>

            {isLoading && (
                <div className="border-t-4 border-green-600 rounded-full w-16 h-16 mb-8 animate-spin"></div>
            )}

            {wavFileUrl && (
                <a href={wavFileUrl} download>
                    <button className="bg-blue-600 text-white py-2 px-4 mb-8 rounded-md hover:bg-green-700">Inspect and download WAV File</button>
                </a> 
            )}
        </div>
    );
}

export default SearchPage;
