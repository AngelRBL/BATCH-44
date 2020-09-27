import React, { useState } from 'react'
//La regla de los useState() simepre debe de ejecutarse al nivel mas alto del componente
//No definirlas en funciones, if o ciclos
const CountComponent = () => {
  const [count, setCount] = useState(0)
  console.log(count, setCount)

  const add = () => {
    const result = count + 1
    setCount(result)
  }
  const reduce = () => {
    const result = count -1
    setCount(result)
  }

    return(
        <div>
          <h2>
            Contador { count }
          </h2>
          
            <div onClick={add}>
              Suma
            </div>
            <div onClick={reduce}>
             resta 
            </div>
        </div>      
    )
}

export default CountComponent