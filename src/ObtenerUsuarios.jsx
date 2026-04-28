import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listarUsuarios } from "./assets/redux/actions/usuariosActions";
import TablaLib from "./TablaLib";

function ObtenerUsuarios() {
  const dispatch = useDispatch();
  const { usuarios } = useSelector((store) => store.usuarios);

  useEffect(() => {
    dispatch(listarUsuarios());
  }, [dispatch]);

  return (
    <>
      <TablaLib usuarios={usuarios} />
    </>
  );
}

export default ObtenerUsuarios;
