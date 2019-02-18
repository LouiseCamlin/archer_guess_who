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
      characterToGuess: null,
      focusQuestion: {
        questionKey: "name",
        questionValue: characterSeeds[0].name
      }
    }
    this.setFocusValue = this.setFocusValue.bind(this)
    this.setFocusKey = this.setFocusKey.bind(this)
    this.handleDoubleClick = this.handleDoubleClick.bind(this)
  }

  componentDidMount(){
    this.getRandomCharacter()
  }

  getRandomCharacter(){
    const characterArray = this.state.characters.slice();
    const randomCharacter =  _.sample(characterArray)
    this.setState({
      characterToGuess: randomCharacter
    })
  }

  handleDoubleClick(event) {
    event.target.classList.toggle('greyed')
  }

  setFocusValue(value) {
    this.setState({
      focusQuestion: {
        questionValue: value
      }
    })
  }

  setFocusKey(key) {
    this.setState({
      focusQuestion: {
        questionKey: key
      }
    })
  }

  render(){
    return (
      <div id="main-container">
        <h1>Guess Who</h1>
        <QuestionSelector
          characters={this.state.characters}
          characterToGuess={this.state.characterToGuess}
          setFocusValue={this.setFocusValue}
          setFocusKey={this.setFocusKey}
          />
        <GameBoard
          characters={this.state.characters}
          handleDoubleClick={this.handleDoubleClick}/>
      </div>
    );
  }

}
export default GuessWhoContainer
