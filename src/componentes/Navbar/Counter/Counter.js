import { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)

    const decrement = () => {
        if(count > 0){
            setCount(prev => prev - 1)
        }
    }

    const increment = () => {
        setCount(count + 1)
    }

    return (
        <div>
            <h1>Carrito: {count}</h1>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    )
}

export default Counter

