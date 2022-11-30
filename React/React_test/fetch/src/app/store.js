import {configureStore} from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'

// store를 만들때 reducer 를 만들어준다.
export default configureStore({
  reducer:{
    counter : counterReducer,
  },
})
