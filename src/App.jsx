import { useState } from "react";
import ObtenerUsuarios from "./ObtenerUsuarios";
import AddUsuarios from "./AddUsuarios";
import { useNavigate, Route, Routes } from "react-router-dom";
import EditUsuarios from "./EditUsuarios";
import Login from "./Login";

function App() {
  const [cuenta, setCuenta] = useState(0);
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate("/")}>Inicio</button>
      <button onClick={() => navigate("/add")}>Agregar Usuario</button>
      <button onClick={() => navigate("/login")}>Login</button>
      <h1>App</h1>
      <Routes>
        <Route path="/" element={<ObtenerUsuarios />} />
        <Route path="/add" element={<AddUsuarios />} />
        <Route path="/edit/:id" element={<EditUsuarios />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}
export default App;
