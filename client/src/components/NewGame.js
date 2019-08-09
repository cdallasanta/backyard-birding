import React from "react";
import { connect } from 'react-redux';

class NewGame extends React.Component {
  state = {
    season: "spring",
    playerName: ""
  }

  handleChange = e =>{
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.startGame(this.state);
    this.props.history.push('/game');
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
    startGame: payload => dispatch({type: "START_GAME", payload})
  }
}

export default connect(null, mapDispatchToProps)(NewGame);