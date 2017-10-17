import React, { Component } from 'react'

import StepButton from './StepButton'





class Home extends Component {

  constructor(props){
    super( props );

    this.state = {
      stepButtonStates: new Array(16).fill(false)
    }

    this.saveBeat = this.saveBeat.bind(this);
    this.toggle = this.toggle.bind(this);

    this.stepButtons = [];
  }

  toggle(index){
    console.log("index====",index)
    console.log("toggle clicked");
    let temp = this.state.stepButtonStates.slice();
    temp[0] = !temp[0];

    this.setState({stepButtonStates: temp});
  }

  render() {

    let saveBtnStyle = {
      background: "aliceblue",
      height: "40px",
      width: "40px",
      display: "inline-block",
      margin: "10px"
    };

    /*for(var i = 0; i < 16; i++){
      this.stepButtons.push(
        <StepButton
          isSelected={this.state.stepButtonStates[i]}
          toggle={this.toggle}
          key={'btn'+i}

          />)
    }*/

    let buttons = this.state.stepButtonStates.map((selected, i) => {
      return (
        <StepButton
          isSelected={this.state.stepButtonStates[i]}
          toggle={this.toggle}
          key={'btn'+i}
          index={i}
        />
      )
    })

    console.log(this.state.stepButtonStates);

    return (
      <div >
        <h1>drum machine</h1>
        {buttons}
        <span style={saveBtnStyle} onClick={ this.saveBeat }>SAVE</span>

      </div>
    )
  }

  saveBeat(){
    alert("beat saved");
    this.stepButtons.forEach((element) => {
      console.log(element);
    });
  }

}

export default Home;
