import React, { Component } from 'react'

import StepButton from './StepButton'





class Home extends Component {

  constructor(props){
    super( props );
    this.saveBeat = this.saveBeat.bind(this);
    this.stepButtons = [];
  }

  componentWillMount(){

  }

  render() {

    let saveBtnStyle = {
      background: "aliceblue",
      height: "40px",
      width: "40px",
      display: "inline-block",
      margin: "10px"
    };

    for(var i = 0; i < 16; i++){
      this.stepButtons.push(<StepButton key={i}/>)

    }

    return (
      <div >
        <h1>drum machine</h1>
        {this.stepButtons}
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
