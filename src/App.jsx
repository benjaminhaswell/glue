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
  });
  const [searchText, setSearchText] = useState('');
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

  // Apply filters (payment, platform, and search)
  useEffect(() => {
    const filteredApps = allApps.filter((app) => {
      // Filtering by payment
      const paymentFilter =
        filters.payment === 'all' ||
        (filters.payment === 'free' && app.price === '0') ||
        (filters.payment === 'paid' && app.price !== '0');

      // Filtering by platform
      const platformFilter =
        filters.platform === 'all' ||
        (app.platform && app.platform.length === 1 && app.platform.includes(filters.platform)) ||
        (app.Platform && app.Platform.length === 1 && app.Platform.includes(filters.platform));

      // Filtering by search text
      const searchFilter =
        searchText === '' ||
        JSON.stringify(app).toLowerCase().includes(searchText);

      // Combine all filters using logical AND
      return paymentFilter && platformFilter && searchFilter;
    });

    setDisplayedApps(filteredApps);
  }, [filters, searchText, allApps]);

  // Every time a filter is changed
  const handleFilterChange = (filterType, value) => {
    // Update filters
    setFilters((prevFilters) => ({ ...prevFilters, [filterType]: value }));
  };

  // When user types in the search input
  const handleSearchChange = (event) => {
    setSearchText(event.target.value.toLowerCase());
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
            onChange={handleSearchChange}
          />
        </form>
      </div>

      {/* Filters */}
      <div className="flex justify-center mb-8">
        <Filters filters={filters} handleFilterChange={handleFilterChange} />
      </div>

      <main>
        {allApps.length === 0 ? (
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
            {displayedApps.length === 0 ? (
              <h1>No apps match your query.</h1>
            ) : ( <></> )};
          </>
        )}
      </main>
    </>
  );
}

export default App;
