import React from 'react'
import Header from './modules/Layout/Header'
import Homepage from './modules/Pages/Home'
import AboutSection from './modules/Pages/AboutSection'

const App = () => {
  return (
    <div>
      <Header/>
      <Homepage/>
      <AboutSection/>
    </div>
  )
}

export default App