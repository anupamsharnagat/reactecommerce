import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import ProductListPage from "./pages/ProductListPage";
import RegisterPage from "./pages/RegisterPage";
import ProtectedRoutesComponent from "./components/ProtectedRoutesComponent";
import UserCartDeatilsPage from "./pages/user/UserCartDeatilsPage";
import UserOrderDetailsPage from "./pages/user/UserOrderDetailsPage";
import UserOrdersPage from "./pages/user/UserOrdersPage";
import UserProfilePage from "./pages/user/UserProfilePage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<HomePage />}/>
        <Route path="/cartPage" element={<CartPage />}/>
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/productDetailsPage" element={<ProductDetailsPage />}/>
        <Route path="/productDetailsPage/:id" element={<ProductDetailsPage />}/>
        <Route path="/productListPage" element={<ProductListPage />}/>
        <Route path="/registerPage" element={<RegisterPage />}/>
        <Route element={<ProtectedRoutesComponent/>}>
        <Route path="/user" element={<UserProfilePage />}/>
        <Route path="/user/cart-details" element={<UserCartDeatilsPage />}/>
        <Route path="/user/order-details" element={<UserOrderDetailsPage />}/>
        <Route path="/user/my-orders" element={<UserOrdersPage />}/>
        </Route>
        
        <Route path="*" element="Page not found 404"/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
