import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Requests from '../pages/Requests';
import Users from '../pages/Users';
import Transactions from '../pages/Transactions';
import Products from '../pages/Products';

export default function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/dashboard" element={<Dashboard/>}/>
        <Route path="/pedidos" element={<Requests/>}/>
        <Route path="/usuarios" element={<Users/>}/>
        <Route path="/transacoes" element={<Transactions/>}/>
        <Route path="/produtos" element={<Products/>}/>
      </Routes>
    </BrowserRouter>
  )
}
