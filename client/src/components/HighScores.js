import React from 'react';
import { connect } from 'react-redux';
import { getGames } from '../actions/GameActions';

class HighScores extends React.Component {
  componentDidMount() {
    this.props.getGames();
  }

  renderScores = () => {
    return this.props.games.map(game => {
      return(
        <li key={game.id} >{game.player} -- {game.season} -- {game.score}</li>
      )
    })
  }

  render(){
    if (this.props.loading){return "...Loading high scores..."}
    return(
      <div id="scores">
        <ol>
          {this.renderScores()}
        </ol>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    games: state.pastScores.games,
    loading: state.pastScores.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {getGames: () => dispatch(getGames())}
}

export default connect(mapStateToProps, mapDispatchToProps)(HighScores);