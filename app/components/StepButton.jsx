import React, { Component } from 'react'

/* we can find a better way to handle CSS later */

let btnColor = "#aae"

let btnStyle = {
  background: btnColor,
  height: "40px",
  width: "40px",
  display: "inline-block",
  margin: "10px"
};

class StepButton extends Component {

  constructor ( props ) {
    super( props );
    this.state = {
      isSelected: null
    }

    this._handleChange = this._handleChange.bind(this);

  }

  componentWillMount () {
    this.setState( { isSelected: this.props.isSelected } );
  }



  render() {
    return (
      <span style={btnStyle} onClick={ this._handleChange }>
        {this.state.isSelected ? '1' : '0'}
      </span>

    )
  }

  _handleChange () {
    !this.state.isSelected ? console.log('selected') : console.log('un selected');
    this.setState( { isSelected: !this.state.isSelected } );
  }



}

export default StepButton;
