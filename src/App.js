import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import FirstPage from './components/FirstPage';
import ShopPage from './components/ShopPage';
import SignUpPage from './components/sign/SignUpPage';
import SignInPage from './components/sign/SignInPage';

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route exact path="/" element={<FirstPage />} />

        {/* ShopPage */}

        <Route exact path="/men" element={<ShopPage />} />
        <Route exact path="/women" element={<ShopPage />}  />
        <Route exact path="/kids" element={<ShopPage />} />
        <Route exact path="/sale" element={<ShopPage />} />
        <Route exact path="/shoes" element={<ShopPage />} />

        {/* Signing  */}

        <Route exact path="/signin" element={<SignInPage />} />
        <Route exact path="/signup" element={<SignUpPage />} />

        {/* cart */}

        {/* <Route exact path="/cart" element={<Cart />} /> */}

      </Routes>

    </BrowserRouter>
  );
}

export default App;
