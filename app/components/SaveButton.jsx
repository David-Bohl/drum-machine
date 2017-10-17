{/*template code for generic component*/}
import React, { Component } from 'react'

let btnStyle = {
  background: "aliceblue",
  height: "40px",
  width: "40px",
  display: "inline-block",
  margin: "10px"
};

class SaveButton extends Component {

  constructor ( props ) {
    super( props );
    this.state = {
      isSelected: null
    }

    this._handleClick = this._handleClick.bind(this);

  }


  render() {



    return (
      <div>
        <span style={btnStyle} onClick={ this._handleClick }>
          SAVE
        </span>
      </div>
    )
  }

  _handleClick () {
    alert("clicked");
  }

}

export default SaveButton;
