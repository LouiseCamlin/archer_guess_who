import React from 'react'
import _ from 'lodash'

class QuestionSelector extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      currentKey: "gender",
      currentValue: this.props.characters[0].gender,
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleKeyChange = this.handleKeyChange.bind(this)
    this.handleValueChange = this.handleValueChange.bind(this)
  }

  handleKeyChange(event) {
    const newKey = event.target.value
    console.log("event", event.target)
    this.setState({
      currentKey: newKey,
      currentValue: this.props.characters[0][newKey]
    }, () => {console.log("key change", this.state);})
  }

  handleValueChange(event) {
    const newValue = event.target.value
    this.setState({ currentValue: newValue }, () => {console.log("value change",this.state.currentValue);})
  }

  handleClick(event){
    event.preventDefault()
    const questionKey = this.state.currentKey
    const questionValue = this.state.currentValue
    this.props.setFocusQuestion(questionKey, questionValue)
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

  getValueSet(key) {
   const valueSet = this.props.characters.map((character) => {
     return character[key]
   })
   return _.uniq(valueSet)
  }

  render() {
    const keySet = Object.keys(this.props.characters[0]).filter((key) => key !== "url" && key !== "name")
    const values = this.getValueSet(this.state.currentKey)
    const valueNodes = this.createSelectOptions(values);

    return (
      <div id="question-select">
      <form>
        <select id="characteristic-qu" onChange={this.handleKeyChange}>
          {this.createSelectOptions(keySet)}
        </select>
        <select id="characteristic-ans" onChange={this.handleValueChange}>
          {valueNodes}
        </select>
        <button type="submit" onClick={this.handleClick}>Submit</button>
      </form>
      </div>
    );
  }

}
export default QuestionSelector
