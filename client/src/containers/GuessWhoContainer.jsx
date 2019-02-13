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
        questionKey: null,
        questionValue: null
      },
      guess: null,
    }
    this.setFocusQuestion = this.setFocusQuestion.bind(this)
    this.handleDoubleClick = this.handleDoubleClick.bind(this)
  }

  componentDidMount(){
    this.getRandomCharacter()
  }

  getRandomCharacter(){
    const characterArray = this.state.characters.slice();
    const randomCharacter =  _.sample(characterArray)
    this.setState({characterToGuess: randomCharacter}, () => console.log(this.state))
  }

  handleDoubleClick(event) {
    event.target.classList.toggle('greyed')
  }

  setFocusQuestion(key, value){
    this.setState({focusQuestion: {
        questionKey: key,
        questionValuevalue: value
      }
    }, () => console.log(this.state.focusQuestion.questionValue))
  }

  render(){
    return (
      <div id="main-container">
        <h1>Guess Who</h1>
        <QuestionSelector characters={this.state.characters} setFocusQuestion={this.setFocusQuestion} />
        <GameBoard characters={this.state.characters} handleDoubleClick={this.handleDoubleClick}/>
      </div>
    );
  }

}
export default GuessWhoContainer
