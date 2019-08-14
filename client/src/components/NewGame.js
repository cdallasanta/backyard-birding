import React from "react";
import { connect } from 'react-redux';
import { drawBYcard } from '../actions/HandActions';
import { seasonCards } from '../cards/allSeasonCards'

const colors = {
  spring: "palegreen",
  summer: "khaki",
  autumn: "peru",
  winter: "lightblue"
}

class NewGame extends React.Component {
  state = {
    season: "spring",
    playerName: ""
  }

  componentDidMount(){
    this.props.reset()
  }

  handleChange = e =>{
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    const payload = Object.assign({}, this.state, {season: seasonCards.find(c => c.name === this.state.season)})
    this.props.startGame(payload);
    this.props.history.push('/game');
    document.body.style.setProperty("--season-color", colors[this.state.season]);
    this.props.drawBYcard(3);
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            Player Name: <input type="text" name="playerName" value={this.state.playerName} onChange={this.handleChange} />
          </div>
          <div>
            Select season:
            <label><input type="radio" name="season" checked={this.state.season === "spring"} value="spring" onChange={this.handleChange} />Spring</label>
            <label><input type="radio" name="season" checked={this.state.season === "summer"} value="summer" onChange={this.handleChange} />Summer</label>
            <label><input type="radio" name="season" checked={this.state.season === "autumn"} value="autumn" onChange={this.handleChange} />Autumn</label>
            <label><input type="radio" name="season" checked={this.state.season === "winter"} value="winter" onChange={this.handleChange} />Winter</label>
          </div>

          <input type="submit" value="Start Game" />
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    startGame: payload => dispatch({type: "START_GAME", payload}),
    drawBYcard: num => dispatch(drawBYcard(num)),
    reset: () => dispatch({type:"RESET_GAME"})
  }
}

export default connect(null, mapDispatchToProps)(NewGame);