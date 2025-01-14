import "./App.css";
import About from "./components/About";
import Box from "./components/Box";
import Hero from "./components/Hero";
import Kizuki from "./components/Kizuki";
import Hashira from "./components/Hashira";
import { Developer } from "./components/Developer";
// import { Footer } from "./components/Footer";
// import BlobCursor from "./components/BlobCursor";

function App() {
  return (
    <>
      <main className="relative min-h-screen w-screen">
        {/* <BlobCursor /> */}
        <Hero />
        <About />
        <Box />
        <Kizuki />
        <Hashira />
        <Developer/>
        {/* <Footer /> */}
      </main>
    </>
  );
}

export default App;
