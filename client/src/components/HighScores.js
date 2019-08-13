import React from 'react';

class HighScores extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      scores:[]
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/high_scores')
      .then(resp => resp.json())
      .then(scores => this.setState({scores: scores}))
  }

  renderScores = () => {
    return this.state.scores.map(game => {
      return(
        <li key={game.id} >{game.player} -- {game.season} -- {game.score}</li>
      )
    })
  }

  render(){
    return(
      <div id="scores">
        <ol>
          {this.renderScores()}
        </ol>
      </div>
    )
  }
}

export default HighScores;