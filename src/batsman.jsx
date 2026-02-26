import { useState } from "react"

export default function Batsman (){
    const [runs, setRuns] = useState(0);
    const [single, setSingle] = useState(0);
    const [sixes, setSixes] = useState(0);
    const [four, setFour] = useState(0);
    const singleRun=()=>{
        const newRun = runs+1;
        const singleCount = single+1;
        setSingle(singleCount);
        setRuns(newRun)
    }
    const hitfour = () =>{
        const newRun = runs+4;
        const fourCount = four+1;
        setFour(fourCount)
        setRuns(newRun)
    }
    const hitSix = () =>{
        const newRun = runs+6;
        const sixCount = sixes+1;
        setSixes(sixCount);
        setRuns(newRun)
    }
    return(
        <div>
            <h3>Player Batsman</h3>
            <h1>Score: {runs}</h1>
            
            <button onClick={singleRun}>Single</button>
            <button onClick={hitfour}>Four</button>
            <button onClick={hitSix}>SIXXX</button>
            
            <p><small>Single: {single}</small> <small>Four: {four}</small> <small>Six: {sixes}</small></p>
        </div>
    )
}