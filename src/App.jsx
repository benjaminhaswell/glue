import './App.css'
import './components/NavBar.jsx'
import NavBar from './components/NavBar.jsx'

function App() {

  return (
    <>
    <NavBar/>

    {/* Background */}
    <div className="background">
      <h1 className='font-extrabold text-yellow md:text-5xl lg:text-6xl'>Glue</h1>
      <h2 className='font-extrabold text-white md:text-5xl lg:text-2xl'>Your Digital App Oasis</h2>
    </div>

    <main>
      {/* Search Bar */}
      <h2 className='font-extrabold md:text-2xl lg:text-4xl m-12'>search bar will go here</h2>

      {/* Apps Display */}
      <h2 className='font-extrabold md:text-2xl lg:text-4xl m-12'>All Apps</h2>
    </main>
    
    </>
  )
}

export default App
