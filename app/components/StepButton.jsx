import React, { Component } from 'react'


class StepButton extends Component {

  constructor ( props ) {
    super( props );

  this._handleChange = this._handleChange.bind(this);
  }



  render() {
    {/* we can find a better way to handle styles later */}
    let btnColor;

    if(this.props.isSelected){
      btnColor = "yellow";
    }
    else{
      btnColor = "#aae";
    }

    let btnStyle = {
      background: btnColor,
      height: "40px",
      width: "40px",
      display: "inline-block",
      margin: "10px"
    };

    return (
      <span style={btnStyle} onClick={ this.props.toggle }>
        {/*this.state.isSelected ? '1' : '0'*/}
      </span>

    )
  }

  _handleChange () {
    console.log("button is clicked");
    // !this.state.isSelected ? console.log('selected') : console.log('un selected');
    /*this.setState( { isSelected: !this.state.isSelected } );*/
  }

}

export default StepButton;
