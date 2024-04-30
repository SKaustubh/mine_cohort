
import { useState } from 'react'


const initialBoard = () => Array(9).fill(null)

function TicTacToes() {

  const [board,setBoard] =useState(initialBoard())
  

  return (
    <div className='game'>

     <div className="status">
      Player x turn
      <button className='reset-button'>Reset</button>
     </div>

     <div className="board">
      {board.map((_,index)=>{
        return <button className='cell' key={index}>X</button>
      })}
     </div>

    </div>
  )
}

export default TicTacToes
