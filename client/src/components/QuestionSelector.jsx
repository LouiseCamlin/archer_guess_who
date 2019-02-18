import React from 'react'
import _ from 'lodash'

class QuestionSelector extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      currentKey: "name",
      currentValue: this.props.characters[0].name,
      guess: null
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleKeyChange = this.handleKeyChange.bind(this)
    this.handleValueChange = this.handleValueChange.bind(this)
  }

  handleKeyChange(event) {
    const newKey = event.target.value
    this.props.setFocusKey(newKey)
    this.setState({
      currentKey: newKey,
      currentValue: this.props.characters[0][newKey]
    })
  }

  handleValueChange(event) {
    const newValue = event.target.value
    this.props.setFocusValue(newValue)
    this.setState({
      currentValue: newValue
    })
  }

  handleClick(event){
    event.preventDefault()
    const currentKey = this.state.currentKey
    const currentValue = this.state.currentValue
    this.setState({ guess:
      {
        key: currentKey,
        value: currentValue
      }
    })
  }

  createSelectOptions(array) {
    return array.map((feature, index) => {
      return (
        <option key={index} value={feature}>
          {feature}
        </option>
      )
    })
  }

  showAnswer() {
    const key = this.state.currentKey
    if (this.state.guess != null) {
      if (this.state.guess.value === this.props.characterToGuess.name) {
        return " Congrats, you won!"
      }
      if (this.state.guess.value === this.props.characterToGuess[key] && this.state.guess.value != this.props.characterToGuess.name ) {
        return " yes"
      }
      return " no"
    }
  }

  getValueSet(key) {
    const valueSet = this.props.characters.map((character) => {
      return character[key]
    })
   return _.uniq(valueSet)
  }

  render() {
    const keySet = Object.keys(this.props.characters[0]).filter((key) => key !== "url")
    const values = this.getValueSet(this.state.currentKey)

    return (
      <div id="question-select">
      <form>
        <select id="characteristic-qu" onChange={this.handleKeyChange}>
          {this.createSelectOptions(keySet)}
        </select>
        <select id="characteristic-ans" onChange={this.handleValueChange}>
          {this.createSelectOptions(values)}
        </select>
        <button type="submit" onClick={this.handleClick}>Submit</button>
      </form>
        <div id="answer-box">
          <h3>
            Answer: {this.showAnswer()}
          </h3>
        </div>
      </div>
    );
  }

}
export default QuestionSelector
