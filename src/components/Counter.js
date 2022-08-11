import { useState } from "react"

const CounterComp = () => {
    const [count, setCount] = useState(0)
  
    console.log(count)
  
    return (
      <>
        <h4>Count is {count}</h4>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <br />
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <br />
        <button onClick={() => setCount(0)}>Reset</button>
      </>
    )
  }

  export default CounterComp