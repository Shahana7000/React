import { useState } from "react"

export default function LudoBoard(){
    let [moves, setMoves] = useState({blue:0, yellow:0,
        green:0, red: 0
    })
    let [arr, SetArr] =useState([" no moves"])


    let updateBlue = () =>{
        moves.blue += 1;
        console.log(`moves.blue = ${moves.blue}`);
        setMoves((preMoves) =>{
         return {...preMoves, blue: preMoves.blue+1}
    })
    SetArr((preArr) => {return[...preArr, "blue moves)"]})
    console.log(arr)
    }
      let updateyellow = () =>{
        moves.yellow += 1;
        console.log(`moves.yellow = ${moves.yellow}`);
        setMoves((preMoves) =>{
         return {...preMoves, yellow: preMoves.yellow + 1}
    })
    }

      let updateGreen= () =>{
        moves.green += 1;
        console.log(`moves.green = ${moves.green}`);
        setMoves((preMoves) =>{
         return {...preMoves, green: preMoves.green+1}
    })
    }

      let updateRed = () =>{
        moves.red += 1;
        console.log(`moves.red = ${moves.red}`);
        setMoves((preMoves) =>{
         return {...preMoves, red: preMoves.red+1}
    })
    }
    return(
        <div>
            <p>Game Begin</p>
            <div className="board">
                <p>Blue Moves = {moves.blue} </p>
                <button style={{backgroundColor: "blue"}} onClick={updateBlue}>+1</button>
                <p>Yellow Moves = {moves.yellow}</p>
                <button style={{backgroundColor: "yellow", color: "black"}} onClick={updateyellow} >+1</button>
                <p>Green Moves = {moves.green}</p>
                <button style={{backgroundColor: "green"}} onClick={updateGreen}>+1</button>
                <p>Red Moves = {moves.red}</p>
                <button style={{backgroundColor: "red"}} onClick={updateRed}>+1</button>
            </div>
        </div>
    )
}