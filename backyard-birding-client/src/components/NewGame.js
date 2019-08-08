import React from "react";
import { connect } from 'react-redux';

class NewGame extends React.Component {
  state = {
    season: "spring"
  }

  handleChange = e =>{
    this.setState({
      season: e.target.value
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
            Select season:
            <label><input type="radio" name="selectSeason" checked={this.state.season === "spring"} value="spring" onChange={this.handleChange} />spring</label>
            <label><input type="radio" name="selectSeason" checked={this.state.season === "summer"} value="summer" onChange={this.handleChange} />summer</label>
            <label><input type="radio" name="selectSeason" checked={this.state.season === "fall"} value="fall" onChange={this.handleChange} />fall</label>
            <label><input type="radio" name="selectSeason" checked={this.state.season === "winter"} value="winter" onChange={this.handleChange} />winter</label>
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