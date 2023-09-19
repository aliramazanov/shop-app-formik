import { Route, Routes, BrowserRouter } from "react-router-dom";

import Favourites from "./pages/Favourites";
import Basket from "./pages/Basket";
import About from "./pages/About";
import Header from "./components/Header/Header";
import Home from "./pages/Home";

export default function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <header>
          <Header />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favourites" element={<Favourites />} />
            <Route path="/basket" element={<Basket />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}
