import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Auth from "../components/Auth";
import RegisterForm from "../components/RegisterForm";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/" element={<Auth />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
