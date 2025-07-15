import React from "react";
import "./css/screen.css";
import SideMenu from "./SideMenu";
import Coverflow from "./Coverflow";
import Games from "./Games";
import Music from "./Music";
import MusicMenu from "./MusicMenu";
import AllSongs from "./AllSongs";
import Artists from "./Artists";

class Screen extends React.Component {
  // Display the sidemenu, coverflow, games,Music etc here
  render() {
    return (
      <>
        <div id="screen">
          <div id="top-bar">
            <div id="battery">90%</div>
          </div>
          <SideMenu />
        </div>
      </>
    );
  }
}

export default Screen;
