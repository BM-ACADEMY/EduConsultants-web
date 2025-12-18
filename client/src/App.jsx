import React from 'react'
import Header from './modules/Layout/Header'
import Homepage from './modules/Pages/Home'
import AboutSection from './modules/Pages/AboutSection'
import ChooseUsSection from './modules/Pages/ChooseUsSection'
import UpcomingWebinars from './modules/Pages/UpcomingWebinars'
import WhatWeHelpWith from './modules/Pages/WhatWeHelpWith'
import TrendingSection from './modules/Pages/TrendingSection';
import ProcessSection from './modules/Pages/Process'
import TestimonialSection from './modules/Pages/TestimonialSection'
import PopularPrograms from './modules/Pages/PopularPrograms'
import FAQSection from './modules/Pages/FAQSection'
import Footer from './modules/Layout/Footer'
import WhatsAppBtn from './modules/Pages/Whatsapp'

const App = () => {
  return (
    <div>
      <Header/>
      <Homepage/>
      <ChooseUsSection/>
      <UpcomingWebinars/>
      <WhatWeHelpWith/>
      <TrendingSection/>
      <ProcessSection/>
      <PopularPrograms/>
      <FAQSection/>
      <AboutSection/>
      <TestimonialSection/>
      <WhatsAppBtn/>
      <Footer/>
    </div>
  )
}

export default App