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
      activeScreen: "menu",
      musicDisplay: {
        musicMenu: true,
        allSongs: false,
        artists: false,
        albums: false,
      },
      selectedMusicItemIndex: 0,
      musicMenuItems: ["All Songs", "Artists", "Albums"],
    };
  }
  // Handle the rotate event fired from the control component
  handleRotation = (direction) => {
    const {
      selectedItemIndex,
      menuItems,
      activeScreen,
      selectedMusicItemIndex,
      musicMenuItems,
      musicDisplay,
    } = this.state;
    if (activeScreen === "menu") {
      let newIndex = selectedItemIndex;
      if (direction === "clockwise") {
        newIndex = (selectedItemIndex + 1) % menuItems.length;
      } else {
        newIndex =
          (selectedItemIndex - 1 + menuItems.length) % menuItems.length;
      }
      this.setState({ selectedItemIndex: newIndex });
    } else if (activeScreen === "music" && musicDisplay.musicMenu) {
      let newMusicIndex = selectedMusicItemIndex;
      if (direction === "clockwise") {
        newMusicIndex = (selectedMusicItemIndex + 1) % musicMenuItems.length;
      } else {
        newMusicIndex =
          (selectedMusicItemIndex - 1 + musicMenuItems.length) %
          musicMenuItems.length;
      }
      this.setState({ selectedMusicItemIndex: newMusicIndex });
    }
  };

  // If ok button is clicked,  open the selected component
  handleOkay = () => {
    const {
      selectedItemIndex,
      menuItems,
      activeScreen,
      musicDisplay,
      selectedMusicItemIndex,
      musicMenuItems,
    } = this.state;
    if (activeScreen === "menu") {
      const selectedMenuItem = menuItems[selectedItemIndex];
      if (selectedMenuItem === "music") {
        this.setState({
          activeScreen: "music",
          musicDisplay: {
            musicMenu: true,
            allSongs: false,
            artists: false,
            albums: false,
          },
          selectedItemIndex: 0,
        });
      } else {
        this.setState({ activeScreen: selectedMenuItem });
      }
    } else if (activeScreen === "music" && musicDisplay.musicMenu) {
      const selectedMusicMenuItem = musicMenuItems[selectedMusicItemIndex];
      let newMusicDisplay = {
        musicMenu: false,
        allSongs: false,
        artists: false,
        albums: false,
      };
      switch (selectedMusicMenuItem) {
        case "All Songs":
          newMusicDisplay.allSongs = true;
          break;
        case "Artists":
          newMusicDisplay.artists = true;
          break;
        case "Albums":
          newMusicDisplay.albums = true;
          break;
      }
      this.setState({ musicDisplay: newMusicDisplay });
    }
  };

  // If menu button is clicked, go back to the menu screen
  handleMenuClick = () => {
    const { activeScreen, musicDisplay } = this.state;
    if (activeScreen === "music" && !musicDisplay.musicMenu) {
      this.setState({
        musicDisplay: {
          musicMenu: true,
          allSongs: false,
          artists: false,
          albums: false,
        },
        selectedMusicItemIndex: 0,
      });
    } else {
      this.setState({ activeScreen: "menu" });
    }
  };

  render() {
    return (
      <>
        <div id="iPod-app">
          <Screen
            selectedItemIndex={this.state.selectedItemIndex}
            menuItems={this.state.menuItems}
            activeScreen={this.state.activeScreen}
            musicDisplay={this.state.musicDisplay}
            selectedMusicItemIndex={this.state.selectedMusicItemIndex}
          />
          <Controls
            onRotate={this.handleRotation}
            onOkay={this.handleOkay}
            onMenuClick={this.handleMenuClick}
          />
        </div>
      </>
    );
  }
}

export default App;
