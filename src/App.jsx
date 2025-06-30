import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import PaymentPage from "./pages/PaymentPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaymentPage />} />
        <Route path="/success" element={<div><p>Pago exitoso!!! <span>Volver</span></p></div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
