import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home.jsx";
import Games from "./pages/games.jsx";
import SlayerBattleGrid from "./pages/slayerBattleGrid.jsx";
import WingnoYaiba from "./pages/WingnoYaiba.jsx";

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
            <Route path="2" element ={
              <WingnoYaiba/>
              }/>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
