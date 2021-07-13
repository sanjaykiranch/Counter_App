import React,{useState} from "react";
import "./style.css"

const  App = ()=>{

    let [score , setScore]=useState(0)
    return(
        <div className="main">
            <h1 className="heading">Counter Application</h1>
            <h1 className="counter">Counter</h1>
            <div className="scorediv">
                <h1 >{score}</h1>
            </div>
            <div className="button">
                <button onClick={()=>(score+1===26)?"":setScore(score+1)}>Increment</button>
                <button onClick={()=>{if(score-1===-1){setScore(0)}else{setScore(score-1)}}}>Decrement</button>
                <button onClick={()=>{setScore(0)}}>Reset</button>
            </div>
            
        </div>
        

    )
}

export default App