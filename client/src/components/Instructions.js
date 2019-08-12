import React from 'react';

const phaseInstructions = ["Draw 2 Bird Cards", "Draw 2 Backyard Cards", "Play 2 Backyard Cards", "Choose a bird to attract", "Roll to attract the bird", "Roll to see which birds fly away"];

const Instructions = props => {
  return(
    <div className="instructions">
      {phaseInstructions[props.phase]}
    </div>
  )
}

export default Instructions