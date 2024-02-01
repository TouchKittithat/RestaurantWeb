import './App.css';

import Navbar from './components/Navbar';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Menu from './Pages/Menu';
import Order from './Pages/Order';
import History from './Pages/History';
import Location from './Pages/Location';
import NewPassword from './Pages/NewPassword';
import Admin from './Pages/Admin';
import OrderConfirm from './Pages/OrderConfirm';

import { Route, Routes } from 'react-router-dom';



function App() {
  return (
    <div className="App">

      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/location' element={<Location />} />
        <Route path='/Menu' element={<Menu />} />
        <Route path='/Order' element={<Order />} />
        <Route path='/history' element={<History />} />
        <Route path='/newpassword' element={<NewPassword />} />
        <Route path='/Admin' element={<Admin />} />
        <Route path='/orderconfirm' element={<OrderConfirm />} />
      </Routes>

    </div>
  );
}

export default App;
