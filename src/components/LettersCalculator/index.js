// Write your code here.

import {Component} from 'react'

import './index.css'

class LetterCalculator extends Component {
  state = {lettersCount: 0}

  onClickOnLettersCount = event => {
    this.setState({lettersCount: event.target.value.length})
  }

  render() {
    const {lettersCount} = this.state
    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <label htmlFor="TextId" className="label">
            Enter the phrase
          </label>
          <br />
          <input
            type="text"
            id="TextId"
            className="inputText"
            placeholder="Enter the phrase"
            onChange={this.onClickOnLettersCount}
          />
          <p className="letters"> No.of letters: {lettersCount}</p>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
          className="calculatorImg"
        />
      </div>
    )
  }
}

export default LetterCalculator
