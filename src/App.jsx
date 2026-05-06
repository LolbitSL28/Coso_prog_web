import { useState } from "react";
import ObtenerUsuarios from "./ObtenerUsuarios";
import AddUsuarios from "./AddUsuarios";
import { useNavigate, Route, Routes } from "react-router-dom";
import EditUsuarios from "./EditUsuarios";
import Login from "./Login";
import CloseSession from "./CloseSession";
import { RutasPrivadas } from "./PrivateRoutes";

function App() {
  const [cuenta, setCuenta] = useState(0);
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate("/usuarios")}>Inicio</button>
      <button onClick={() => navigate("/add")}>Agregar Usuario</button>
      <button onClick={() => navigate("/login")}>Login</button>
      <button onClick={() => navigate("/close")}>Cerrar Sesión</button>
      <h1>App</h1>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<RutasPrivadas />}>
          <Route path="/usuarios" element={<ObtenerUsuarios />} />
          <Route path="/add" element={<AddUsuarios />} />
          <Route path="/edit/:id" element={<EditUsuarios />} />
          <Route path="/close" element={<CloseSession />} />
        </Route>
      </Routes>
    </div>
  );
}
export default App;
