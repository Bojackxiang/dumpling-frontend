import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        username: '', 
    },
    reducers: {
        login: (state, action) => {
            console.log('[login]')
        },
        logout: (state, action) => {
          console.log('[logout]')
        },
    }
})

export const { login, logout } = authSlice.actions

export default authSlice.reducer