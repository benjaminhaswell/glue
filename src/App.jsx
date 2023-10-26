import './App.css'
import AppCard from './components/AppCard'
import './components/NavBar.jsx'
import NavBar from './components/NavBar.jsx'

function App() {

  let testObject = new Object();
  testObject.name = "Test App";
  testObject.companyName = "Test Company Name";

  return (
    <>
      <NavBar />

      {/* Background */}
      <div className="background">
        <h1 className='font-extrabold text-yellow text-6xl'>Glue</h1>
        <h2 className='font-extrabold text-white text-4xl'>Your Digital App Oasis</h2>
      </div>

      <main>

        {/* Search Bar */}
        {/* <div className='flex items-center justify-center'>
          <form className="w-full max-w-xl">
            <div className="border-teal py-2">
              <input className="w-full" type="text" placeholder="Search Apps" aria-label="Search Apps" />
            </div>
          </form>
        </div> */}
        <div className='flex items-center justify-center'>
          <form className='mt-8'>
            <input type="text" id="searchApps" placeholder="Search Apps" aria-label="Search Apps" />
          </form>
        </div>



        {/* Apps Display */}
        <h2 className='font-extrabold text-3xl m-12'>All Apps</h2>
        <div className="grid grid-cols-3 gap-4 px-48">
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
