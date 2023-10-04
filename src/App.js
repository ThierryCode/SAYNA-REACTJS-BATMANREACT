import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import {Eshop} from './pages/ESHOP/Eshop'
import {MonCompte} from './pages/MonCompte/components/MonCompte'
import { Game } from './pages/Game';
import { ShopContextProvider } from './context/shopContext';
import { Cart } from './pages/ESHOP/Cart/Cart';
import { OrderHistory } from './pages/MonCompte/components/OrderHistory/OrderHistory';
import { Catalogue } from './pages/ESHOP/Catalogue/Catalogue';

function App() {
  return (
    <>
    <ShopContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path='/Eshop' element={<Eshop />}>
            <Route path="/Eshop" index element={<Catalogue />}/>
            <Route path='cart'element ={<Cart />}/>
            <Route path='OrderHistory'element ={<OrderHistory />}/>
          </Route>
          <Route path='/MonCompte' element={<MonCompte />}/>
          <Route path='/game' element={<Game />}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </ShopContextProvider>
    </>
  );
}

export default App;
