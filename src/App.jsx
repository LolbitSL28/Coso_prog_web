import { useState } from "react";
import ObtenerUsuarios from "./ObtenerUsuarios";
import AddUsuarios from "./AddUsuarios";
import { useNavigate, Route, Routes } from "react-router-dom";
import EditUsuarios from "./EditUsuarios";

function App() {
  const [cuenta, setCuenta] = useState(0);
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate("/")}>Inicio</button>
      <button onClick={() => navigate("/add")}>Agregar Usuario</button>
      <h1>Tabla de Usuarios</h1>
      <Routes>
        <Route path="/" element={<ObtenerUsuarios />} />
        <Route path="/add" element={<AddUsuarios />} />
        <Route path="/edit/:id" element={<EditUsuarios />} />
      </Routes>
    </div>
  );
}
export default App;
