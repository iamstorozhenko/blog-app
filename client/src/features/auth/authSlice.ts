import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface LoginResponse {
  _id: string;
  name: string;
  email: string;
  token: string;
}

interface LoginState {
  user: LoginResponse | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: null;
}

interface LoginData {
  email: string;
  password: string;
}

export const loginUser = createAsyncThunk<LoginResponse, LoginData>(
  "auth/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await axios.post<LoginResponse>(
        "http://localhost:3500/users/login",
        {
          email,
          password,
        }
      );
      return response.data;
    } catch (error) {
      console.log(error);
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data);
      }
      throw error;
    }
  }
);

const initialState: LoginState = {
  user: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
      localStorage.setItem("token", action.payload.token);
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.isLoading = false;
    });
  },
});

export default authSlice.reducer;

export const { logout } = authSlice.actions;
