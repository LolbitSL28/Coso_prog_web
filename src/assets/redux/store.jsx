import { configureStore } from "@reduxjs/toolkit";
import { usuariosReducer } from "./slices/usuariosSlice";

export default configureStore({
    reducer:{
        usuarios: usuariosReducer
    }
});