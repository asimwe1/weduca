import { useState } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/HeroSection'
import Footer from '../components/Footer'
import GetStarted from '../components/GetStarted'
import StudyDestinations from '../components/Studydest'
import StatsSection from '../components/stats'
import FeaturesSection from '../components/Features'
import StudyProgramSearch from '../components/StudyProgram'

import TrustedInstitutionsSection from '../components/Partners'
import StudentPlatform from '../components/Platform'
import WhatsAppBubble from '../components/WhatsAppBubble'


function Home() {

  return (
    <>
    <Navbar />
    <Hero />
    <WhatsAppBubble />
    <StudentPlatform />
    <StatsSection />
    <TrustedInstitutionsSection />
    <StudyProgramSearch />
    <FeaturesSection />
    <StudyDestinations />
    <GetStarted />
    <Footer />
    </>
  )
}

export default Home
