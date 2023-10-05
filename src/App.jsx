import "./App.css";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Body from "./Pages/Body";
import FAQs from "./Pages/FAQs";
import Error from "./Pages/Error";
import Cart from "./Pages/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/" element={<Body />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQs />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
