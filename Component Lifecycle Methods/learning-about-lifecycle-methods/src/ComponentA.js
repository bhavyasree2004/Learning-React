import React from "react";

class ComponentA extends React.Component {
  constructor() {
    super();
    console.log("ComponentA constructor");
    this.state = {
      data: [],
    };
  }

  static getDerivedStateFromProps() {
    console.log("ComponentA getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => this.setState({ data }));
    console.log("ComponentA componentDidMount");
  }

  render() {
    console.log("ComponentA render");
    return this.state.data.map((item, index) => (
      <ul key={index}>
        <li>{item.username}</li>
      </ul>
    ));
  }
}

export default ComponentA;
