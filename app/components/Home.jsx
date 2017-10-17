import React, { Component } from 'react'

import StepButton from './StepButton'
import SaveButton from './SaveButton'

let saveBtnStyle = {
  background: "aliceblue",
  height: "40px",
  width: "40px",
  display: "inline-block",
  margin: "10px"
};

var stepButtons = [];
for(var i = 0; i < 16; i++){
  stepButtons.push(<StepButton isSelecteded={ false } />)
}

class Home extends Component {

  constructor(props){
    super( props );
    this.saveBeat = this.saveBeat.bind(this);
  }

  render() {


    return (
      <div >
        <h1>drum machine</h1>
        {stepButtons}
        <span style={saveBtnStyle} onClick={ this.saveBeat }>SAVE</span>

      </div>
    )
  }

  saveBeat(){
    alert("beat saved");

    stepButtons.forEach((element) => {
      console.log(element);
    });

  }


}

export default Home;
