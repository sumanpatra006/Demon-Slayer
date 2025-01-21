import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home.jsx";
import Games from "./pages/games.jsx";
import ErrorBoundary from "./components/ErrorBoundary.jsx";
import SlayerBattleGrid from "./pages/SlayerBattleGrid.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" >
          <Route index element={<Home />} />
          <Route path="games">
            <Route index element={<Games />} />
            <Route path="1" element ={
              <SlayerBattleGrid/>
              }/>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
