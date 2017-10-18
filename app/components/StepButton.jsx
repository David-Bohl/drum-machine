import React, { Component } from 'react'

class StepButton extends Component {
  render() {
    let btnColor

    if (this.props.isSelected) {
      btnColor = 'yellow'
    } else {
      btnColor = '#aae'
    }

    const btnStyle = {
      background: btnColor,
      height: '40px',
      width: '40px',
      display: 'inline-block',
      margin: '10px'
    }

    return (
      <span style={btnStyle} onClick={ () => this.props.toggle(this.props.index) }>
      </span>

    )
  }
}

export default StepButton
