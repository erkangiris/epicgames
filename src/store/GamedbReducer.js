import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: []
}

export const gamedbSlice = createSlice({
  name: 'gamedb',
  initialState,
  reducers: {
    add: (state, action) => {
      state.items.push(action.payload)
    }
  }
})

export const {add} = gamedbSlice.actions

export default gamedbSlice.reducer