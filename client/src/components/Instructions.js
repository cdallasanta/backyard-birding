import React from 'react';

const phaseInstructions = ["Draw Bird Cards", "Draw Backyard Cards", "Play 2 Backyard Cards", "Choose a bird to attract", "Roll to attract the bird", "Roll to see which birds fly away"];

const Instructions = props => {
  return(
    <div className="instructions" id="instructions">
      <p>
        {phaseInstructions[props.phase]}
      </p>
    </div>
  )
}

export default Instructions