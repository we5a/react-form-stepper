import { Route, Routes, Navigate } from "react-router-dom";
import { DetailForm, OrderForm, Confirmation } from "./pages";
import { Layout } from "./components";
import App from "./App";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={ <Navigate replace to="/order" />} />
      <Route element={<Layout />}>
        <Route path="/order" element={<OrderForm />} />
        <Route path="/detail" element={<DetailForm />} />
        <Route path="/confirm" element={<Confirmation />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
