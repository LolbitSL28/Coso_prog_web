import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  addUsuarios,
  listarUsuarios,
} from "./assets/redux/actions/usuariosActions";

function FormUsuarios() {
  const dispatch = useDispatch();
  const [usuario, setUsuario] = useState({
    usuarioId: "",
    nombre: "",
    apellidoPaterno: "",
    apellidoMaterno: "",
    nombreUsuario: "",
    contraseña: "",
    habilitado: "1",
  });

  async function guardarUsr() {
    dispatch(addUsuarios(usuario)).then(() => alert("Guardado correcto"));
    console.log(usuario);
    await dispatch(listarUsuarios());
    setUsuario({
      nombre: "",
      apellidoPaterno: "",
      apellidoMaterno: "",
      nombreUsuario: "",
      contraseña: "",
      habilitado: "1",
    });
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
        <input type="text" name="nombre" onChange={(e) => change(e)}></input>
      </label>
      <br />
      <label>
        Apellido Paterno:{" "}
        <input
          type="text"
          name="apellidoPaterno"
          onChange={(e) => change(e)}
        ></input>
      </label>
      <br />
      <label>
        Apellido Materno:{" "}
        <input
          type="text"
          name="apellidoMaterno"
          onChange={(e) => change(e)}
        ></input>
      </label>
      <br />
      <label>
        Username:{" "}
        <input
          type="text"
          name="nombreUsuario"
          onChange={(e) => change(e)}
        ></input>
      </label>
      <br />
      <label>
        Contraseña:{" "}
        <input
          type="password"
          name="contrasena"
          onChange={(e) => change(e)}
        ></input>
      </label>
      <br />
      <button type="button" onClick={guardarUsr}>
        Añadir Usuario
      </button>
    </>
  );
}

export default FormUsuarios;
