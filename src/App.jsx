import './App.css'
import About from './components/About'
import Box from './components/Box'
import Hero from './components/Hero'
function App() {

  return (
    <>
      <main className='relative min-h-screen w-screen overflow-x-hidden'>
        <Hero/>
        <About/>
        <Box/>
      </main>
    </>
  )
}

export default App
