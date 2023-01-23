import { createSlice } from "@reduxjs/toolkit"
const user = localStorage.getItem("userInfo")

const initialState = {
  userInfo: null || JSON.parse(user)
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    handelLogin: (state, action) => {
      state.userInfo = action.payload
    },
    handelLogout: (state) => {
      state.userInfo = null
    },
  },
})

export const { handelLogout ,handelLogin} =
  userSlice.actions

export default userSlice.reducer
