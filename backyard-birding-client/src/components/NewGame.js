import React from "react";
import { connect } from 'react-redux';

class NewGame extends React.Component {
  state = {
    selectedSeason: "spring"
  }

  handleChange = e =>{
    this.setState({
      selectedSeason: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.startGame(this.state)
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            Select season:
            <label><input type="radio" name="selectSeason" checked={this.state.selectedSeason === "spring"} value="spring" onChange={this.handleChange} />spring</label>
            <label><input type="radio" name="selectSeason" checked={this.state.selectedSeason === "summer"} value="summer" onChange={this.handleChange} />summer</label>
            <label><input type="radio" name="selectSeason" checked={this.state.selectedSeason === "fall"} value="fall" onChange={this.handleChange} />fall</label>
            <label><input type="radio" name="selectSeason" checked={this.state.selectedSeason === "winter"} value="winter" onChange={this.handleChange} />winter</label>
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