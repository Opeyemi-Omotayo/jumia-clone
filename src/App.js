import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import Footer from "./components/Footer";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginPage from "./Pages/Authentication/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/:productName" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;