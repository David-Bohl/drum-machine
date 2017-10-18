import React, { Component } from 'react'
import StepButton from './StepButton'

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      stepButtonStates: new Array(16).fill(false)
    }

    this.saveBeat = this.saveBeat.bind(this)
    this.toggle = this.toggle.bind(this)
  }

  toggle(index) {
    const temp = this.state.stepButtonStates.slice()
    temp[index] = !temp[index]
    this.setState({stepButtonStates: temp})
  }

  saveBeat() {
    console.log('beat pattern: ', this.state.stepButtonStates)
  }

  render() {
    const saveBtnStyle = {
      background: '#aae',
      height: '40px',
      width: '40px',
      display: 'inline-block',
      margin: '10px'
    }

    const buttons = this.state.stepButtonStates.map((selected, i) => {
      return (
        <StepButton
          isSelected={this.state.stepButtonStates[i]}
          toggle={this.toggle}
          key={'btn'+i}
          index={i}
        />
      )
    })

    return (
      <div >
        <h1>drum machine</h1>
        {buttons}
        <span style={saveBtnStyle} onClick={ this.saveBeat }>SAVE</span>

      </div>
    )
  }
}

export default Home;
