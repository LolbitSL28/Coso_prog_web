function Login() {
  return (
    <>
      <h2>Login</h2>
      <label>
        Username:
        <input type="text" name="nombreUsuario"></input>
      </label>
      <br />
      <label>
        Contraseña:
        <input type="password" name="contrasena"></input>
      </label>
    </>
  );
}
export default Login;
