import React from "react";
import "./App.css";
import Screen from "./components/Screen";
import Controls from "./components/Controls";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedItemIndex: 0,
      menuItems: ["coverflow", "music", "games", "settings"],
    };
  }
  // Handle the rotate event fired from the control component
  handleRotation = (direction) => {
    const { selectedItemIndex, menuItems } = this.state;
    let newIndex = selectedItemIndex;
    if (direction == "clockwise") {
      newIndex = (selectedItemIndex + 1) % menuItems.length;
    } else {
      newIndex = (selectedItemIndex - 1 + menuItems.length) % menuItems.length;
    }
    this.setState({ selectedItemIndex: newIndex });
  };

  // If ok button is clicked,  open the selected component

  // If menu button is clicked, go back to the menu screen

  render() {
    return (
      <>
        <div id="iPod-app">
          <Screen
            selectedItemIndex={this.state.selectedItemIndex}
            menuItems={this.state.menuItems}
          />
          <Controls onRotate={this.handleRotation} />
        </div>
      </>
    );
  }
}

export default App;
