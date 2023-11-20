import { useState, useEffect } from 'react';
import './App.css';
import AppCard from './components/AppCard';
import './components/NavBar.jsx';

function App() {
  
  const [allApps, setAllApps] = useState([]);


  // Fetch apps from server
  useEffect(() => {
    async function fetchApps() {
      try {
        const response = await fetch('http://localhost:3000/api/apps');
        
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        setAllApps(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    // Call the function to fetch data
    fetchApps();
  }, []); // Empty dependency array to ensure it only runs once

  // Render loading or the actual component based on data
  return (
    <>
      {/* Background */}
      <div className="background">
        <h1 className='font-extrabold text-yellow text-6xl'>Glue</h1>
        <h2 className='font-extrabold text-white text-4xl'>Your Digital App Oasis</h2>
      </div>

      <main>
        {/* Check if data is available */}
        {allApps.length === 0 ? (
          <p>Loading...</p>
        ) : (
          <>
            {/* Search Bar */}
            <div className='flex items-center justify-center'>
              <form className='mt-8'>
                <input type="text" id="searchApps" placeholder="Search Apps" aria-label="Search Apps" />
              </form>
            </div>

            {/* Filters go here */}


            {/* Apps Display */}
            <h2 className='font-extrabold text-3xl m-12'>All Apps</h2>
            {/* This element VVV is the culprit of the width issue */}
            <div className="grid grid-cols-3 gap-4 px-8 lg:px-48">
              {allApps.map((appObject, index) => (
                <AppCard key={index} appObject={appObject} />
              ))}
            </div>
          </>
        )}
      </main>
    </>
  );
}

export default App;
