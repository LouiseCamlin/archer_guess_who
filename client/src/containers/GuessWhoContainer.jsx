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
      characterToGuess: this.getRandomCharacter(characterSeeds),
      guess: null
    }
    this.handleDoubleClick = this.handleDoubleClick.bind(this)
    this.resetGame = this.resetGame.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  getRandomCharacter(characters){
    const characterArray = characters.slice();
    const randomCharacter =  _.sample(characterArray)
    return randomCharacter
  }

  handleDoubleClick(event) {
    event.target.classList.toggle('greyed')
  }

  handleClick(event, currentKey, currentValue){
    const image = document.querySelectorAll('.greyed')
    console.log(image);
    this.setState({ guess:
      {
        key: currentKey,
        value: currentValue
      }
    }, () => {console.log("guess", this.state.guess);})
  }

  removeClassFromImage() {
    document.querySelectorAll('img').forEach(element => element.classList.remove('greyed'))
  }

  resetGame() {
    console.log("RESET");
    const characterSeeds = CharacterSeeds()
    this.setState({
      characters: characterSeeds,
      characterToGuess: this.getRandomCharacter(characterSeeds),
      guess: null
    })
    this.removeClassFromImage()
  }

  render(){
    return (
      <div id="main-container">
        <h1>Guess Who</h1>
        <QuestionSelector
          characters={this.state.characters}
          characterToGuess={this.state.characterToGuess}
          handleClick={this.handleClick}
          guess={this.state.guess}
          resetGame={this.resetGame}
          />
          <div id="reset">
            <button id="reset-button" onClick={this.resetGame}>Reset Game</button>
          </div>
        <GameBoard
          characters={this.state.characters}
          handleDoubleClick={this.handleDoubleClick}/>
      </div>
    );
  }

}
export default GuessWhoContainer
