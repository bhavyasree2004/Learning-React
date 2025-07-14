import { Component } from "react";

class Person extends Component {
  // Define appropriate lifecycle method to show alert here
  componentWillUnmount() {
    console.log("Unmounting", this.props.person.email);
    alert(
      `a person with email ${this.props.person.email} was removed from your network.`
    );
  }

  render() {
    const { handleRemove } = this.props;
    const { id, img, email, show } = this.props.person;
    if (!show) return null;
    return (
      <div className="person">
        <b onClick={() => handleRemove(id)}>X</b>
        <img alt={email} src={img} />
        <p>{email}</p>
      </div>
    );
  }
}

export default Person;
