import React from 'react'
import QuestionSelector from '../components/QuestionSelector.jsx'
import CharacterSeeds from '../models/CharacterSeeds.js'
import GameBoard from '../components/GameBoard.jsx'

class GuessWhoContainer extends React.Component {

  constructor(props){
    super(props)
    const characterSeeds = CharacterSeeds()
    this.state = {
      characters: characterSeeds,
      characterToGuess: this.getRandomCharacter(characterSeeds)
    }
    this.handleDoubleClick = this.handleDoubleClick.bind(this)
  }

  getRandomCharacter(characters){
    const characterArray = characters.slice();
    const randomCharacter =  _.sample(characterArray)
    return randomCharacter
  }

  handleDoubleClick(event) {
    event.target.classList.toggle('greyed')
  }

  render(){
    return (
      <div id="main-container">
        <h1>Guess Who</h1>
        <QuestionSelector
          characters={this.state.characters}
          characterToGuess={this.state.characterToGuess}
          />
        <GameBoard
          characters={this.state.characters}
          handleDoubleClick={this.handleDoubleClick}/>
      </div>
    );
  }

}
export default GuessWhoContainer
