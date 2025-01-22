import React from 'react'
import About from "../components/About";
import Box from "../components/Box";
import Hero from "../components/Hero";
import Kizuki from "../components/Kizuki";
import Hashira from "../components/Hashira";
import { Developer } from "../components/Developer";
import { Footer } from "../components/Footer";
import TogameSectionButton from '../components/togameSectionButton';

const Home = () => {
  return (
    <>
      <main className="relative min-h-screen w-screen">
        <Hero />
        <About />
        <Box />
        <Kizuki />
        <Hashira />
        <TogameSectionButton/>
        <Developer />
        <Footer />
      </main>
    </>
  )
}

export default Home

