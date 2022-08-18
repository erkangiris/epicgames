import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: []
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    add: (state, action) => {
      state.items.push(action.payload)
    },
    remove: (state,action) => {
      state.items = state.items.filter(item => item.id !== action.payload)
    }
  },
})

export const {add, remove} = basketSlice.actions

export default basketSlice.reducer