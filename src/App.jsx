import './App.css'
import './components/NavBar.jsx'
import NavBar from './components/NavBar.jsx'

function App() {

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
          <form className="w-full max-w-xl">
            <input className="w-full" type="text" placeholder="Search Apps" aria-label="Search Apps" />
          </form>
        </div>
        


        {/* Apps Display */}
        <h2 className='font-extrabold text-3xl m-12'>All Apps</h2>
      </main>

    </>
  )
}

export default App
