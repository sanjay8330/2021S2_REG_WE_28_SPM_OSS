import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './home';
import Footer from './components/footer/footer';

//User Management - Routes
import Register from './components/userManagement/register';
import Login from './components/userManagement/login';
import ForgotPassword from './components/userManagement/forgotPassword';
import ResetPassword from './components/userManagement/resetPassword';
import AdminAddUser from './components/Administrator/registerUsers';

//Product Offer Management - Routes
import AddProductOffer from './components/ProductOffer/addProductOffer';
import ViewProductOffer from './components/ProductOffer/viewProductOffer';
import UpdateProductOffer from './components/ProductOffer/updateProductOffer';
import DeleteProductOffer from './components/ProductOffer/deleteProductOffer';

import adminDashboard from '../src/adminDashboard';
import createProduct from './components/productManagement/createProduct';
import ViewProducts from './components/productManagement/viewProducts';

function App() {
  return (
    <div>
      <Router>
        <section>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/register" component={Register} />
            <Route path="/login" component={ Login } />
            <Route path="/forgotPassword" component={ ForgotPassword } />
            <Route path="/resetPassword/:id" component={ ResetPassword } />
            <Route path="/adminUserRegister" component={ AdminAddUser } />

            <Route path="/addProductOffer" component={ AddProductOffer } />
            <Route path="/viewProductOffers" component={ ViewProductOffer } />
            <Route path="/updateProductOffer/:id" component={ UpdateProductOffer } />
            <Route path="/deleteProductOffer/:id" component={ DeleteProductOffer } />

            <Route path="/adminDashboard" component={ adminDashboard } />
            <Route path="/createProduct" component={ createProduct } />
            <Route path="/viewProducts" component={ ViewProducts } />
          </Switch>
        </section>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
