import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import {Eshop} from './pages/ESHOP/Eshop'
import {MonCompte} from './pages/MonCompte/components/MonCompte'
import { Game } from './pages/Game';
import { ShopContextProvider } from './context/shopContext';
import { Cart } from "./pages/ESHOP/Cart/Cart"
function App() {
  return (
    <>
    <ShopContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path='/Eshop' element={<Eshop />}/>
          <Route path='/MonCompte' element={<MonCompte />}/>
          <Route path='/game' element={<Game />}/>
          <Route path='/Eshop/Cart' element={<Cart />}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </ShopContextProvider>
    </>
  );
}

export default App;
