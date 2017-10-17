import React, { Component } from 'react'


class StepButton extends Component {

  constructor ( props ) {
    super( props );
    this.state = {
      isSelected: false
    }
    this._handleChange = this._handleChange.bind(this);
  }

  componentWillMount () {
    this.setState( { isSelected: this.props.isSelected } );
  }

  render() {
    {/* we can find a better way to handle styles later */}
    let btnColor = "#aae";

    if(this.state.isSelected){
      btnColor = "yellow";
    }

    let btnStyle = {
      background: btnColor,
      height: "40px",
      width: "40px",
      display: "inline-block",
      margin: "10px"
    };

    return (
      <span style={btnStyle} onClick={ this._handleChange }>
        {/*this.state.isSelected ? '1' : '0'*/}
      </span>

    )
  }

  _handleChange () {
    !this.state.isSelected ? console.log('selected') : console.log('un selected');
    this.setState( { isSelected: !this.state.isSelected } );
  }

}

export default StepButton;
