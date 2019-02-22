import React from 'react'
import _ from 'lodash'

class QuestionSelector extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      currentKey: "name",
      currentValue: this.props.characters[0].name,
      question: null
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleKeyChange = this.handleKeyChange.bind(this)
    this.handleValueChange = this.handleValueChange.bind(this)
  }

  handleKeyChange(event) {
    const newKey = event.target.value
    this.setState({
      currentKey: newKey,
      currentValue: this.props.characters[0][newKey],
      question: null
    }, () => {console.log("key change", this.state);})
  }

  handleValueChange(event) {
    const newValue = event.target.value
    this.setState({
      currentValue: newValue,
      question: null
    }, () => {console.log("value change", this.state);})
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

  renderAnswer() {
    const key = this.state.currentKey

    if (this.props.guess != null && this.state.question) {
      if (this.props.guess.value === this.props.characterToGuess.name) {
        return " Congrats, you won!"
      }
      if (this.props.guess.value === this.props.characterToGuess[key] && this.props.guess.value === this.props.characterToGuess[key] ) {
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

  handleClick(event) {
    event.preventDefault()
    const currentKey = this.state.currentKey
    const currentValue = this.state.currentValue
    this.props.handleClick(event, currentKey, currentValue)
    this.setState({question: true})
  }

  render() {
    console.log(this.props);
    const keySet = Object.keys(this.props.characters[0]).filter((key) => key !== "url")
    const values = this.getValueSet(this.state.currentKey)

    return (
      <div id="question-select">
      <form>
        <select id="characteristic-qu" onChange={this.handleKeyChange}>
          {this.createSelectOptions(keySet)}
        </select>
        <select id="characteristic-ans" value={this.state.currentValue} onChange={this.handleValueChange}>
          {this.createSelectOptions(values)}
        </select>
        <button type="submit" onClick={this.handleClick}>Submit</button>
      </form>
        <div id="answer-box">
          <h3>
          Answer:
          {this.renderAnswer()}
          </h3>
        </div>
      </div>
    );
  }

}
export default QuestionSelector
