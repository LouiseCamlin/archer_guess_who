import React from 'react'
import Character from './Character.jsx'

const GameBoard = (props) => {

  const characters = props.characters.map((character, index) => {
    return <Character key={index}
      character={character}
      handleDoubleClick={props.handleDoubleClick}/>
  })

  return (
    <div id='game-board'>
      {characters}
    </div>
  )
}

export default GameBoard
