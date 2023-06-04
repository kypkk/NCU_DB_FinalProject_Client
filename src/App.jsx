import "./Styles/App.css";
import Nav from "./Components/Nav.jsx";
import { Trade, Home, Account, GBRule1, Aboutus } from "./Pages";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <main className="App flex flex-col bg-white">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Trade" element={<Trade />} />
        <Route path="/Strategy/GBRule1" element={<GBRule1 />} />
        <Route path="/Account/" element={<Account />} />
        <Route path="/About/" element={<Aboutus />} />
      </Routes>
    </main>
  );
}

export default App;
