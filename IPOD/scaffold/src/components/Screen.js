import React from "react";
import "./css/screen.css";
import SideMenu from "./SideMenu";
import Coverflow from "./Coverflow";
import Games from "./Games";
import Settings from "./Settings";
import Music from "./Music";

class Screen extends React.Component {
  // Display the sidemenu, coverflow, games,Music etc here
  render() {
    const {
      selectedItemIndex,
      menuItems,
      activeScreen,
      musicDisplay,
      selectedMusicItemIndex,
    } = this.props;
    let contentToDisplay;
    switch (activeScreen) {
      case "menu":
        contentToDisplay = (
          <SideMenu
            selectedItemIndex={selectedItemIndex}
            menuItems={menuItems}
          />
        );
        break;
      case "coverflow":
        contentToDisplay = <Coverflow />;
        break;
      case "games":
        contentToDisplay = <Games />;
        break;
      case "music":
        contentToDisplay = (
          <Music
            display={musicDisplay}
            activeItemInMenu={selectedMusicItemIndex}
          />
        );
        break;
      case "settings":
        contentToDisplay = <Settings />;
        break;
      default:
        contentToDisplay = (
          <SideMenu
            selectedItemIndex={selectedItemIndex}
            menuItems={menuItems}
          />
        );
    }
    return (
      <>
        <div id="screen">
          <div id="top-bar">
            <div id="battery">90%</div>
          </div>
          {contentToDisplay}
        </div>
      </>
    );
  }
}

export default Screen;
