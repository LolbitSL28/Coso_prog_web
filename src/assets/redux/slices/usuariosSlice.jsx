import { elimUsuarios, listarUsuarios } from "../actions/usuariosActions";
import { addUsuarios } from "../actions/usuariosActions";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  usuarios: [],
  usuario: {},
  loading: false,
  error: null,
};
const usuariosSlice = createSlice({
  name: "Usuarios",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(listarUsuarios.pending, (state) => {
        state.loading = true;
      })
      .addCase(listarUsuarios.fulfilled, (state, action) => {
        state.loading = false;
        state.usuarios = action.payload;
      })
      .addCase(listarUsuarios.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
      })
      .addCase(addUsuarios.pending, (state) => {
        state.loading = true;
      })
      .addCase(addUsuarios.fulfilled, (state, action) => {
        state.loading = false;
        state.usuario = action.payload;
      })
      .addCase(addUsuarios.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
      })
      .addCase(elimUsuarios.pending, (state) => {
        state.loading = true;
      })
      .addCase(elimUsuarios.fulfilled, (state, action) => {
        state.loading = false;
        state.usuario = action.payload;
      })
      .addCase(elimUsuarios.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
      });
  },
});
export const usuariosReducer = usuariosSlice.reducer;
