import "./Styles/App.css";
import Nav from "./Components/Nav.jsx";
import GBRule1 from "./Pages/Strategy/GBRule1";
import TradingViewWidget from "./Components/TradingViewWidget";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App flex flex-col bg-blue-gray-900">
      <Nav />
      <Routes>
        <Route path="/" element={<TradingViewWidget />} />
        <Route path="/Strategy/GBRule1" element={<GBRule1 />} />
      </Routes>
    </div>
  );
}

export default App;
