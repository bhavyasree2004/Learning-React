import React from "react";

export default class InputFormUsingClass extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      lastName: "",
    };
  }

  handleName = (e) => {
    this.setState({ name: e.target.value });
  };

  handleLastName = (e) => {
    this.setState({ lastName: e.target.value });
  };
  render() {
    return (
      <>
        <div className="section">
          <Row label="Name">
            <input
              className="input"
              value={this.state.name}
              onChange={this.handleName}
            ></input>
          </Row>
          <Row label="Last Name">
            <input
              className="input"
              value={this.state.lastName}
              onChange={this.handleLastName}
            ></input>
          </Row>
        </div>
        <h2>Hello, {this.state.name + " " + this.state.lastName} </h2>
      </>
    );
  }
}

function Row(props) {
  const { label } = props;
  return (
    <>
      <label>{label}</label>
      {props.children}
      <hr />
    </>
  );
}
