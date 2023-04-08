// Write your code here.

import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {textInput: ''}

  onChange = event => {
    this.setState({textInput: event.target.value})
  }

  render() {
    const {textInput} = this.state

    return (
      <div className="app-container">
        <div className="card">
          <div className="image-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
              alt="letters calculator"
              className="image"
            />
          </div>
          <div className="text-container">
            <h1 className="heading">Calculate the Letters you Enter</h1>
            <div>
              <label htmlFor="letters" className="label-heading">
                Enter the phrase
              </label>
              <br />
              <input
                type="text"
                id="letters"
                placeholder="Enter the phrase"
                onChange={this.onChange}
                className="input-element"
              />
            </div>
            <div>
              <p className="button">No.of Letters: {textInput.length}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
