import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import "./app.css"
import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "./pages/UserList/UserList";
import User from "./pages/User/User";
import NewUser from "./pages/NewUser/NewUser";
import NewProduct from "./pages/NewProduct/NewProduct";
import ProductList from "./pages/ProductList/ProductList";
import Product from "./pages/Product/Product";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/user/:id" element={<User />} />
          <Route path="/newuser" element={<NewUser />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/newproduct" element={<NewProduct />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
