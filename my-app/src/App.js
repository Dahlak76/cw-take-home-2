import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchData } from './app/store'

const App = () => {
  const dispatch = useDispatch()
  const [input, setInput] = useState('')
  const api = useSelector(state => state.api || {})

  useEffect(() => {
    // console.log('response:', api.response);
    // console.log('loading:', api.loading);
    // console.log('error:', api.error);
  }, [api, input]);

  const handleSubmit = e => {
    e.preventDefault()
    console.log('dispatch', dispatch)
  console.log('input', input)
  console.log('api', api)
    dispatch(fetchData({ payload: input }))
    console.log('fetchData', fetchData)
    // console.log('api:', api);
    // console.log('api.loading:', api.loading);
    // console.log('api.error:', api.error);
    // console.log('api.response:', api.response);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <p>
        test
      {api && api.loading && <div>Loading...</div>}
      {api && api.error && <div>{api.error}</div>}
      {api && api.response && <div>{api.response}</div>}
      </p>
      <p>hello</p>
    </div>
  )
}

export default App



// import React from 'react'
// import Form from './Form'

// const App = () => {
//   return (
//     <>
//       <Form />
//     </>
//   );
// };


// export default App


