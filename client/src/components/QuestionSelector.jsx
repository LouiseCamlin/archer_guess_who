import React from 'react'

class QuestionSelector extends React.Component {

  constructor(props) {
      super(props)
  }

  handleChange(event) {

     const newIndex = event.target.value;
     this.setState({selectedIndex: newIndex})

     const selectedQuestion = this.props.characters[newIndex]
     this.props.selectQuestion(selectedQuestion)
   }


   render() {
     const options = this.props.characters.map((character, index) => {
    return (
      <option key={index} value={index}>{character.name}</option>
      )
  })



     return (
       <div id="question-select">
         <select id="characteristic" onChange={this.handleChange.bind(this)}>
           {options}
         </select>


       </div>
     );
   }


}
export default QuestionSelector
