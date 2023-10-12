import { useState } from 'react'
// import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';



function ColorGen() {
    const [color, setColor] = useState("black")
    return (
        <div className='main' style={{ backgroundColor: color }}>
            <div className='btnSec'>
                <div className='inner'>
                    <button style={{ backgroundColor: "red", color: "white" }} onClick={() => setColor("red")}>red</button>
                    <button style={{ backgroundColor: "yellow", color: "black" }} onClick={() => setColor("yellow")}>yellow</button>
                    <button style={{ backgroundColor: "green", color: "white" }} onClick={() => setColor("green")}>green</button>
                    <button style={{ backgroundColor: "white", color: "black" }} onClick={() => setColor("white")}>white</button>
                    <button style={{ backgroundColor: "orange", color: "white" }} onClick={() => setColor("orange")}>orange</button>
                </div>
            </div>
        </div >
    )
}

export default ColorGen