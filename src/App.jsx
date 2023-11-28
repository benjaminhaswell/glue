import { useState, useEffect } from 'react';
import './App.css';
import AppCard from './components/AppCard';
import Filters from './components/Filters.jsx';

function App() {
  // State declaration
  const [allApps, setAllApps] = useState([]);
  const [filters, setFilters] = useState({
    payment: 'all',
    platform: 'all',
    searchInput: '', // Add searchInput to filters state
  });
  const [displayedApps, setDisplayedApps] = useState([]);

  useEffect(() => {
    async function fetchApps() {
      try {
        const response = await fetch('http://localhost:3000/api/apps');

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        setAllApps(data);
        setDisplayedApps(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchApps();
  }, []);

  // Every time a filter is changed
  const handleFilterChange = (filterType, value) => {

    // Update filters
    setFilters((prevFilters) => ({ ...prevFilters, [filterType]: value }));

    console.log(filters);

    // Filter apps
    const filteredApps = allApps.filter((app) => {

      // Filtering by payment
      if (filterType === 'payment') {

        if (value === 'all') {
          return true; // Show all apps
        } else if (value === 'free') {
          return app.price === "0";
        } else {
          return app.price !== "0";
        }
        
      }

      // Filtering by platform
      if (filterType === 'platform') {

        if (value === 'all') return true;

        // console.log("Name: " + app.name + " | Platform: " + app.platform);
        // console.log(JSON.stringify(app))

        // Filter by platform (iOS, Android, all)
        if (app.platform) {
          if (app.platform.length > 1) return false;
          return app.platform.includes(value)
        } else if (app.Platform) {
          if (app.Platform.length > 1) return false;
          return app.Platform.includes(value)
        }
          
      }

      if (filterType === 'searchInput') {

        return JSON.stringify(app).toLowerCase().includes(filters.searchInput.toLowerCase());

      }

      return true; // No filter applied
    });

    setDisplayedApps(filteredApps);
  };

  // Body
  return (
    <>
      {/* Background */}
      <div className="background">
        <h1 className='font-extrabold text-yellow text-6xl'>Glue</h1>
        <h2 className='font-extrabold text-white text-4xl'>Your Digital App Oasis</h2>
      </div>

      {/* Search Apps */}
      <div className='flex items-center justify-center'>
        <form className='mt-8'>
          <input
            type="text"
            id="searchApps"
            placeholder="Search Apps"
            aria-label="Search Apps"
            value={filters.searchInput}
            onChange={(e) => handleFilterChange('searchInput', e.target.value)}
          />
        </form>
      </div>

      {/* Filters */}
      <div className="flex justify-center mb-8">
        <Filters filters={filters} handleFilterChange={handleFilterChange} />
      </div>

      <main>
        {displayedApps.length === 0 ? (
          <p>Loading...</p>
        ) : (
          <>
            {/* Apps */}
            <h2 className='font-extrabold text-3xl m-12'>All Apps</h2>
            <div className="grid grid-cols-3 gap-4 px-8 lg:px-48">
              {displayedApps.map((appObject, index) => (
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
