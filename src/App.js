import { lazy, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { StoreContextProvider } from './Context/StoreContext';

import Footer from './Components/Footer/Footer.jsx';
import Login from './Components/Login/Login.jsx';

const Home = lazy(() => import("./Pages/Home/Home.jsx"));
const Cart = lazy(() => import("./Pages/Cart/Cart.jsx"));
const PlaceOrder = lazy(() => import("./Pages/PlaceOrder/PlaceOrder.jsx"));

function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {showLogin && <Login setShowLogin={setShowLogin} />}

    
      <StoreContextProvider>
        <BrowserRouter>
          <div className="App container">
            <Navbar setShowLogin={setShowLogin} />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/order" element={<PlaceOrder />} />
            </Routes>
          </div>

          <Footer />
        </BrowserRouter>
      </StoreContextProvider>
    </>
  );
}

export default App;

