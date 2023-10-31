import './App.css'
import AppCard from './components/AppCard'
import './components/NavBar.jsx'

function App() {

  let testObject = new Object();
  testObject.name = "Test App";
  testObject.companyName = "Test Company Name";

  return (
    <>

      {/* Background */}
      <div className="background">
        <h1 className='font-extrabold text-yellow text-6xl'>Glue</h1>
        <h2 className='font-extrabold text-white text-4xl'>Your Digital App Oasis</h2>
      </div>

      <main>

        {/* Search Bar */}
        <div className='flex items-center justify-center'>
          <form className='mt-8'>
            <input type="text" id="searchApps" placeholder="Search Apps" aria-label="Search Apps" />
          </form>
        </div>



        {/* Apps Display */}
        <h2 className='font-extrabold text-3xl m-12'>All Apps</h2>
        {/* This element VVV is the culprit of the width issue */}
        <div className="grid grid-cols-3 gap-4 px-8 lg:px-48">
          <AppCard appObject={testObject}/>
          <AppCard appObject={testObject}/>
          <AppCard appObject={testObject}/>
          <AppCard appObject={testObject}/>
          <AppCard appObject={testObject}/>
          <AppCard appObject={testObject}/>
        </div>
      </main>

    </>
  )
}

export default App
