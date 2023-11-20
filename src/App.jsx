import { useState, useEffect } from 'react';
import './App.css';
import AppCard from './components/AppCard';
import Filters from './components/Filters.jsx';

function App() {
  const [allApps, setAllApps] = useState([]);
  const [filters, setFilters] = useState({
    payment: 'all',
    platform: 'all',
  });

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

    fetchApps();
  }, []);

  const handleFilterChange = (filterType, value) => {
    setFilters((prevFilters) => ({ ...prevFilters, [filterType]: value }));
    // Filtering logic goes here
    console.log(`Filter type: ${filterType}, Value: ${value}`);
  };

  return (
    <>
      <div className="background">
        <h1 className='font-extrabold text-yellow text-6xl'>Glue</h1>
        <h2 className='font-extrabold text-white text-4xl'>Your Digital App Oasis</h2>
      </div>

      <main>
        {allApps.length === 0 ? (
          <p>Loading...</p>
        ) : (
          <>
            {/* Search Apps */}
            <div className='flex items-center justify-center'>
              <form className='mt-8'>
                <input type="text" id="searchApps" placeholder="Search Apps" aria-label="Search Apps" />
              </form>
            </div>

            {/* Filters */}
            <div className="flex justify-center mb-8">
              <Filters filters={filters} handleFilterChange={handleFilterChange} />
            </div>

            {/* Apps */}
            <h2 className='font-extrabold text-3xl m-12'>All Apps</h2>
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
