import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import axios from "axios";

export const listarUsuarios = createAsyncThunk(
  "usuarios/listar",
  async (data, { isRejectedWithValue }) => {
    const response = await axios.get("http://38.22.229.186:2121/usuarios");
    return response.data;
  },
);

export const addUsuarios = createAsyncThunk(
  "usuarios/add",
  async (data, { isRejectedWithValue }) => {
    const response = await axios.post(
      "http://38.22.229.186:2121/usuarios",
      data,
    );
    return response.data;
  },
);
export const elimUsuarios = createAsyncThunk(
  "usuarios/elim",
  async (data, { isRejectedWithValue }) => {
    const response = await axios.delete(
      `http://38.22.229.186:2121/usuarios/${data}`,
    );
    return response.data;
  },
);
export const editUsuarios = createAsyncThunk(
  "usuarios/edit",
  async ({ id, data }, { isRejectedWithValue }) => {
    const response = await axios.put(
      `http://38.22.229.186:2121/usuarios/${id}`,
      data,
    );
    return response.data;
  },
);
