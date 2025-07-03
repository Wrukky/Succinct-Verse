'use client'

import React from 'react'
import Hero from './sections/Hero' // ✅ if page.tsx is inside `app/`
import Section01 from './sections/Section01'
import Section02 from './sections/Section02'
import Section03 from './sections/Section03'
import Section04 from './sections/Section04'
import Section05 from './sections/Section05'
import Section06 from './sections/Section06'
import Section07 from './sections/Section07'
import Section08 from './sections/Section08'
import Section09 from './sections/Section09'
import Section10 from './sections/Section10'
import Section11 from './sections/Section11'
import Section12 from './sections/Section12'
import Footer from './components/Footer'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black flex flex-col justify-center items-center text-white px-6 text-center">
      <Hero />
      <Section01 />
      <Section02 />
      <Section03 />
      <Section04 />
      <Section05 />
      <Section06 />
      <Section07 />
      <Section08 />
      <Section09 />
      <Section10 />
      <Section11 />
      <Section12 />
      <Footer />
    </main>
  )
}


