
import { useState } from 'react'
import Button from '../Button/Button'

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
            <br/>
            <h1>Cantidad a llevar: {count}</h1>
            <Button callback={increment} label={'+'}/>
            <Button callback={decrement} label={'-'}/>
            {/* <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button> */}
        </div>
    )
}

export default Counter