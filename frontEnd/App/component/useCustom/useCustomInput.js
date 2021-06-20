import React, { useState } from 'react'

// (2)
// const useCustomInput = (initial) => {
//     const [data, setData] = useState({ username: "", email: "", password: "" })

//     const handleInput = ({ target: input }) => {
//         console.log(input)
//         const datastore = data
//         datastore[input.name] = input.value
//         setData({ ...datastore })

//     }
//     return [data, handleInput]
// }

// export default useCustomInput;
//(4)
// const useCustomInput = (initial) => {
//     const [value, setValue] = useState(initial)
//     const reset = setValue(initial)
//     const bind = {
//         value,
//         onChange: e => setValue(e.target.value)
//     }

//     return [value, bind, reset];
// }

// export default useCustomInput;