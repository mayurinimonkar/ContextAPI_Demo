import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";

import CartPage from "./components/Cart";

function App() {

  return (
    <div>
      <BrowserRouter>
        <Header />
        <div className="App">
          <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/cart" element={<CartPage/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
