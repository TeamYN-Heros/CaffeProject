import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Auth from "../components/Auth";
import RegisterForm from "../components/RegisterForm";
// import Cart from "../components/Cart";
import Cart from "../features/cart/Cart"

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/" element={<Auth />} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
