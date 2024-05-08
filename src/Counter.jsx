import React, { useState } from 'react'

const Counter = () => {
    const[valueOfCount, setValueOfCount] = useState(0)
  return (
    <div>
      <h1>Counter App</h1>
      <p>Count: {valueOfCount}</p>
      <button onClick={() =>setValueOfCount((prev) => prev+1)}>Increament</button>
      <button onClick={() =>setValueOfCount((prev) => prev-1)}>Decreament</button>
    </div>
  )
}

export default Counter
