import { Route, Routes } from "react-router-dom";
import { OrderForm } from "./pages";
import App from "./App";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/order" element={<OrderForm />} />
    </Routes>
  );
};

export default AppRoutes;
