import React from 'react'
import QuestionSelector from '../components/QuestionSelector.jsx'
import CharacterSeeds from '../models/CharacterSeeds.js'
import GameBoard from '../components/GameBoard.jsx'

class GuessWhoContainer extends React.Component {

  constructor(props){
    super(props)
    const characterSeeds = CharacterSeeds()
    this.state = {
      characters: characterSeeds
    }
  }

  setFocusQuestion(character){
    this.setState({focusQuestion: character}, () => {
      console.log("Hurray!");
      console.log(character);
    })
  }

  render(){
    return (
      <div id="main-container">
        <h1>Guess Who</h1>
        <QuestionSelector characters={this.state.characters} selectQuestion={this.setFocusQuestion.bind(this)}/>
        <GameBoard characters={this.state.characters}/>
      </div>
    );
  }

}
export default GuessWhoContainer
