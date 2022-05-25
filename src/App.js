import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Pages/Authentication/Login';
import SignUp from './Pages/Authentication/SignUp';
import Blogs from './Pages/Blogs/Blogs';
import Dashboard from './Pages/Dashboard/Dashboard';
import Home from './Pages/Home/Home';
import MyPortfolio from './Pages/MyPortfolio/MyPortfolio';
import NotFound from './Pages/NotFound/NotFound';
import Purchase from './Pages/Purchase/Purchase';
import Footer from './Pages/Shared/Footer';
import Header from './Pages/Shared/Header/Header';
import RequireAuth from './Pages/Shared/RequireAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MyProfile from './Pages/Dashboard/MyProfile';
import MyOrders from './Pages/Dashboard/MyOrders';
import AddReview from './Pages/Dashboard/AddReview';
import AllUsers from './Pages/Dashboard/AllUsers';
import ManageOrders from './Pages/Dashboard/ManageOrders';
import AddProduct from './Pages/Dashboard/AddProduct';
import ManageProducts from './Pages/Dashboard/ManageProducts';
import EditProfile from './Pages/Dashboard/EditProfile';
import RequireAdmin from './Pages/Shared/RequireAdmin';
import RequireUser from './Pages/Shared/RequireUser';
import Payment from './Pages/Dashboard/Payment';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/blogs' element={<Blogs />}></Route>
        <Route path='/dashboard' element={<RequireAuth>
          <Dashboard />
        </RequireAuth>}>
          <Route index element={<MyProfile />}></Route>
          <Route path='myOrders' element={<RequireUser><MyOrders /></RequireUser>}></Route>
          <Route path='addReview' element={<RequireUser><AddReview /></RequireUser>}></Route>
          <Route path='payment/:id' element={<Payment />}></Route>
          <Route path='users' element={<RequireAdmin><AllUsers /></RequireAdmin>}></Route>
          <Route path='manageOrders' element={<RequireAdmin><ManageOrders /></RequireAdmin>}></Route>
          <Route path='addProduct' element={<RequireAdmin><AddProduct /></RequireAdmin>}></Route>
          <Route path='manageProducts' element={<RequireAdmin><ManageProducts /></RequireAdmin>}></Route>
        </Route>
        <Route path='/dashboard/editProfile' element={<EditProfile />}></Route>
        <Route path='/purchase/:id' element={<RequireAuth>
          <Purchase />
        </RequireAuth>}></Route>
        <Route path='/myPortfolio' element={<MyPortfolio />}></Route>
        <Route path='/signUp' element={<SignUp />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
