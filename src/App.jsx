import './App.css'
import About from './components/About'
import Box from './components/Box'
import Hero from './components/Hero'
import Kizuki from './components/Kizuki'
import Hashira from './components/Hashira'

function App() {

  return (
    <>
      <main className='relative min-h-screen w-screen'>
        <Hero/>
        <About/>
        <Box/>
        <Kizuki/>
        <Hashira/>
      </main>
    </>
  )
}

export default App
