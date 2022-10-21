import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

export const fetchIncrement = createAsyncThunk(
  "counter/fetchIncrement",
  async (value) => {
    const response = await axios.put('/counter/increment', {value : value});
    return response.data;
  }
);

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0, // counter 로 조정할 값
  },
  reducers: {
    // 이 안에 함수들을 넣는다.
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
  extraReducers : {
    [fetchIncrement.fulfilled]: (state,action) => {
      state.value = action.payload.value
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
// reducers를 만들면 counterSlice 안에 actions 라고 자동으로 만들어진다.

export default counterSlice.reducer;
