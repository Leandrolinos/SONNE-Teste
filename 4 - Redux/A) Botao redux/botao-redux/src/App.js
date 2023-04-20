import React from "react";
import { connect } from "react-redux";
import { changeButtonState } from "./actions";
import "./styles.css";

class App extends React.Component {
  handleClick = () => {
    const newButtonState = !this.props.buttonState;
    this.props.changeButtonState(newButtonState);
  };

  render() {
    return (
      <div className="app-container">
        <button className="app-button" onClick={this.handleClick}>
          {this.props.buttonState ? "ON" : "OFF"}
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    buttonState: state.buttonState,
  };
};

const mapDispatchToProps = {
  changeButtonState,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
