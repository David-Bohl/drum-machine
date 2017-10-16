import React, { Component } from 'react'

let btnStyle = {
  background: "#aae",
  height: "40px",
  width: "40px",
  display: "inline-block",
  margin: "10px"
};

class StepButton extends Component {

  constructor ( props ) {
    super( props );
    this.state = {
      isChecked: null
    }
  }

  componentWillMount () {
    this.setState( { isChecked: this.props.isChecked } );
  }

  render() {
    return (
      <span style={btnStyle} ref="switch" checked={ this.state.isChecked } onClick={ this._handleChange } className="switch" type="checkbox"/>

    )
  }

  _handleChange () {
  
    console.log("change handled");
  }

}

export default StepButton;
