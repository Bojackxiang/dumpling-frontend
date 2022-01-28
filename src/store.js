import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from 'reducers/auth'
import cartReducer from 'reducers/cartSlice'

export default configureStore({
    reducer: {
        cart: cartReducer,
        auth: authSlice
    },
})