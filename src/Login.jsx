import { useState } from "react";
import { useDispatch } from "react-redux";
import { actLogin } from "./assets/redux/actions/authActions";

function Login() {
  const dispatch = useDispatch();
  const [usuario, setUsuario] = useState({
    nombreUsuario: "",
    contraseña: "",
  });

  async function LogOn() {
    console.log(usuario);
    await dispatch(actLogin(usuario));
    setUsuario({
      nombreUsuario: "",
      contraseña: "",
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
          name="contraseña"
          onChange={(e) => change(e)}
        ></input>
      </label>
      <br />
      <button type="button" onClick={LogOn}>
        Login
      </button>
    </>
  );
}

export default Login;
