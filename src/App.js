import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import FirstPage from './components/FirstPage';
import ShopPage from './components/ShopPage';
import SignUpPage from './components/sign/SignUpPage';
import SignInPage from './components/sign/SignInPage';
import Item from './components/item/Item';
import CartPage from './components/cart/CartPage';
import Error from './components/Error';

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route exact path="/" element={<FirstPage />} />

        {/* ShopPage */}

        <Route exact path="/men" element={<ShopPage props={ {category: "men"} } />} />
        <Route exact path="/women" element={<ShopPage props={ {category: "women"} } />}  />
        <Route exact path="/kids" element={<ShopPage props={ {category: "kids"} } />} />


        {/* Signing  */}

        <Route exact path="/signin" element={<SignInPage />} />
        <Route exact path="/signup" element={<SignUpPage />} />

        {/* cart */}

        <Route exact path="/cart" element={<CartPage />} />


        {/* item  */}

        <Route exact path="/item" element={<Item />} />


        {/* error  */}

        <Route exact path="/error" element={<Error />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
