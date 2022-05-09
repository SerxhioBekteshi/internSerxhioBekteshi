import AppNavigate from './AppNavigate'
import PrivateRoute from './private-route';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import TestPage from '../pages/test'
import DashboardPage from '../pages/dashboard'
import Menu from "../main/components/Menu";

import BankAccounts from '../pages/bankAccount/BankAccounts';
import AddBankAccount from '../pages/bankAccount/AddBankAccount';
import EditBankAccount from "../pages/bankAccount/EditBankAccount";

import Currencies from '../pages/currency/Currencies';
import AddCurrency from '../pages/currency/AddCurrency';
import EditCurrency from '../pages/currency/EditCurrency';

import ProductToBuy from "../pages/buyProduct/ProductToBuy";

const App = () => 
{
    return (
      <BrowserRouter>
          <AppNavigate />
          <Menu />
          <Routes>
                <Route path="/" element={<PrivateRoute><DashboardPage/></PrivateRoute>} />
                <Route path="/login" element={<PrivateRoute isPageLogin><TestPage /></PrivateRoute>} />
                
                <Route path="/bankAccounts" element={<PrivateRoute ><BankAccounts /></PrivateRoute>} />
                <Route path="/AddBankAccount" element={<PrivateRoute ><AddBankAccount /></PrivateRoute>} />
                <Route path="/EditBankAccount/:id" element={<PrivateRoute ><EditBankAccount /></PrivateRoute>} />

                <Route path="/currencies" element={<PrivateRoute ><Currencies /></PrivateRoute>} />
                <Route path="/addCurrency" element={<PrivateRoute ><AddCurrency /></PrivateRoute>} />
                <Route path="/EditCurrency/:id" element={<PrivateRoute ><EditCurrency /></PrivateRoute>} />

                <Route path="/ProductToBuy" element={<PrivateRoute ><ProductToBuy /></PrivateRoute>} />

          </Routes>
      </BrowserRouter>
    );
};

export default App;
