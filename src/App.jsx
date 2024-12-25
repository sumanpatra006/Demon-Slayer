import './App.css'
import About from './components/About'
import Box from './components/Box'
import Hero from './components/Hero'
import Kizuki from './components/Kizuki'

function App() {

  return (
    <>
      <main className='relative min-h-screen w-screen overflow-x-hidden'>
        <Hero/>
        <About/>
        <Box/>
        <Kizuki/>
      </main>
    </>
  )
}

export default App
