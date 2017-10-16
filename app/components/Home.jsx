import React, { Component } from 'react'

import StepButton from './StepButton'

class Home extends Component {



  render() {

    var stepButtons = [];
    for(var i = 0; i < 16; i++){
      stepButtons.push(<StepButton isChecked={ true } />)
    }

    return (
      <div >
        <h1>drum machine</h1>
        {stepButtons}
        <span>Save Beat</span>

      </div>
    )
  }
}

export default Home;
