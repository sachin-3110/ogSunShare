import React from 'react'
import Login from './components/Auth/Login'
import Navbar from './components/common/Navbar'
import Routing from './Routing.jsx' 

const App = () => {
  return (
    
      <div className="w-full min-h-screen bg-black text-white">
        <Navbar />
        <main className="container mx-auto">
          <Routing/>
          </main>
      </div>
   
  )
}

export default App
