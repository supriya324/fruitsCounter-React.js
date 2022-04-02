// Write your code here
import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {count: 0, count1: 0}

  mangoIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  bananaIncrement = () => {
    this.setState(prevState => ({count1: prevState.count1 + 1}))
  }

  render() {
    const {count, count1} = this.state

    return (
      <div className="fruits-app-container">
        <div className="fruits-container">
          <h1 className="heading">
            Bob ate <span className="count">{count}</span>mangoes
            <span className="count">{count1}</span> bananas
          </h1>
          <div className="images">
            <img
              src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
              className="mango-image"
              alt="mango"
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
              className="banana-image"
              alt="banana"
            />
          </div>
          <div className="button-container">
            <button
              className="button"
              type="button"
              onClick={this.mangoIncrement}
            >
              Eat Mango
            </button>
            <button
              className="button"
              type="button"
              onClick={this.bananaIncrement}
            >
              Eat Banana
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter
