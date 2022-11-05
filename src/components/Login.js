import { useState } from "react";
import Modal from "react-modal/lib/components/Modal";
import "../CSS/Login.css";
import UseTabs from "../hooks/useTabs";

const Login = () => {
  const [open, setOpen] = useState(true);
  return (
    <Modal isOpen={open} className="ModalForm">
      <UseTabs />
      <span onClick={() => setOpen(!open)}>close</span>
    </Modal>
  );
};

export default Login;
