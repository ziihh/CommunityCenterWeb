import React from "react";

export default class Toggle extends React.Component {
  state = {
    on: false
  };
  Toggle = () => {
    this.setState({
      on: !this.state.on
    });
  };
  render() {
    return (
      <div className="galcontainer">
        {this.state.on && this.props.children}
        <button className="toggle" type="button" onClick={this.Toggle}>
          Vis mer/mindre
        </button>
      </div>
    );
  }
}
