// Create component here to display the Basic information such as
// Name: Email: Phone: Address:
// Make sure to include these in your code with semicolon

import { Component } from "react";

export default class Hero extends Component {
  render() {
    return (
      <div className="hero">
        <div className="name">Name: Bhavya Sree Munagavalasa</div>
        <div className="email">Email: bhavyasree1504@gmail.com</div>
        <div className="phoneno">Phone: 9440149847</div>
        <div className="address">
          Address: Ramnagar, Sriharipuram, Visakhapatnam
        </div>
      </div>
    );
  }
}
