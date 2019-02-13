import React from 'react'

const Character = (props) => {

  return <img src={props.character.url} onDoubleClick={props.handleDoubleClick}/>
}

export default Character
