import { configureStore, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

//create redux slice with a name and initial state
const apiSlice = createSlice({
  name: 'api',
  initialState: {
    response: '',
    loading: false,
    error: null
  },
  //create reducers for each state change 
  reducers: {
    setResponse: (state, action) => {
      state.response = action.payload
      state.loading = false
    },
    setLoading: state => {
      state.loading = true
    },
    setError: (state, action) => {
      state.error = action.payload
      state.loading = false
    }
  }
})
//export reducers to be used in components 
export const { setResponse, setLoading, setError } = apiSlice.actions
//export a fetch function that dispatches the reducers 
//function accepts a payload argument that is passed to the axios post request
export const fetchData = payload => async dispatch => {
  try {
    //dispatch the setLoading reducer to set loading to true
    dispatch(setLoading())
    //make an async axios post request to the server
    const response = await axios.post('http://localhost:3006/transform', payload)
    //dispatch the setResponse reducer to set the response to the response data
    dispatch(setResponse(response.data))
    //catch any errors and dispatch the setError reducer to set the error to the error message
  } catch (error) {
    dispatch(setError(error.message))
  }
}
//create a store using configureStore and pass the apiSlice reducer
export const store = configureStore({
  reducer: apiSlice.reducer
})



