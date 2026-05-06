import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  editUsuarios,
  listarUsuarios,
} from "./assets/redux/actions/usuariosActions";
import { useNavigate, useParams } from "react-router-dom";

function EditUsuarios() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const [usuario, setUsuario] = useState({
    usuarioId: "",
    nombre: "",
    apellidoPaterno: "",
    apellidoMaterno: "",
    nombreUsuario: "",
    contraseña: "",
    habilitado: "1",
  });

  useEffect(() => {
    cargarUsuario();
  }, [id]);

  async function cargarUsuario() {
    const response = await dispatch(listarUsuarios());
    if (response.type === "usuarios/listar/fulfilled") {
      const usuarios = response.payload;
      const foundUser = usuarios.find(
        (user) => user.usuarioId == id || user.id == id,
      );
      if (foundUser) {
        setUsuario({
          usuarioId: foundUser.usuarioId,
          nombre: foundUser.nombre,
          apellidoPaterno: foundUser.apellidoPaterno,
          apellidoMaterno: foundUser.apellidoMaterno,
          nombreUsuario: foundUser.nombreUsuario,
          contraseña: foundUser.contraseña,
          habilitado: "1",
        });
      }
    }
  }

  async function guardarUser() {
    await dispatch(editUsuarios({ id: usuario.usuarioId, data: usuario })).then(
      () => alert("Modificación correcta"),
    );
    console.log(usuario);
    await dispatch(listarUsuarios());
    navigate("/usuarios");
  }
  function change(e) {
    const { name, value } = e.target;

    setUsuario((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  return (
    <>
      <h2>Formulario</h2>
      <label>
        Nombre(s):{" "}
        <input
          type="text"
          name="nombre"
          value={usuario.nombre}
          onChange={(e) => change(e)}
        ></input>
      </label>
      <br />
      <label>
        Apellido Paterno:{" "}
        <input
          type="text"
          name="apellidoPaterno"
          value={usuario.apellidoPaterno}
          onChange={(e) => change(e)}
        ></input>
      </label>
      <br />
      <label>
        Apellido Materno:{" "}
        <input
          type="text"
          name="apellidoMaterno"
          value={usuario.apellidoMaterno}
          onChange={(e) => change(e)}
        ></input>
      </label>
      <br />
      <label>
        Username:{" "}
        <input
          type="text"
          name="nombreUsuario"
          value={usuario.nombreUsuario}
          onChange={(e) => change(e)}
        ></input>
      </label>
      <br />
      <label>
        Contraseña:{" "}
        <input
          type="password"
          name="contraseña"
          value={usuario.contraseña}
          onChange={(e) => change(e)}
        ></input>
      </label>
      <br />
      <button type="button" onClick={guardarUser}>
        Modificar Usuario
      </button>
    </>
  );
}

export default EditUsuarios;
