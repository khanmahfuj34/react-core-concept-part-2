import { useState } from "react"

export default function Batsman (){
    const [runs, setRuns] = useState(0);
    const singleRun=()=>{
        const newRun = runs+1;
        setRuns(newRun)
    }
    const hitfour = () =>{
        const newRun = runs+4;
        setRuns(newRun)
    }
    const hitSix = () =>{
        const newRun = runs+6;
        setRuns(newRun)
    }
    return(
        <div>
            <h3>Player Batsman</h3>
            <h1>Score: {runs}</h1>
            <button onClick={singleRun}>Single</button>
            <button onClick={hitfour}>Four</button>
            <button onClick={hitSix}>SIXXX</button>
        </div>
    )
}