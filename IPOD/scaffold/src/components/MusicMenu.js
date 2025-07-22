import React, { useEffect } from "react";
import AllSongs from "./AllSongs";

function MusicMenu(props) {
  const { activeItemInMenu } = props;
  const musicMenuItems = ["AllSongs", "Artists", "Albums"];
  return (
    <table id="music-menu">
      <tbody>
        <tr>
          <th className="table-heading">
            Music <i className="fas fa-music"></i>
          </th>
        </tr>
        {musicMenuItems.map((item, index) => (
          <tr
            data-option={item}
            className={index == activeItemInMenu ? "active" : ""}
          >
            <td className="table-item">
              {item}
              <i className="fas fa-chevron-right"></i>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default MusicMenu;
