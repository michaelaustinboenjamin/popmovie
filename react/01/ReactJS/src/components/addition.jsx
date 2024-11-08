import { useState } from "react"
export default  function addition(){
    let[num1,setnum1]=useState(Math.floor(Math.random()*10))
    let[num2,setnum2]=useState(Math.floor(Math.random()*10))
    let[score,setscore]=useState(0)
    return(
        <>
        <h2>Addition Calculation Quiz</h2>
        <p>Score:{score}</p>
        <form>
            <p>What is {num1} +{num2} = ?</p>
            <input type="number" placeholder="Your Answer"required/>
            <button type="submit">Submit</button>
        </form>
        </>
    )
}