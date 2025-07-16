import React, { useEffect } from "react";

function SideMenu(props) {
  // write logic for changing the selected item in the side menu
  const { selectedItemIndex, menuItems } = props;
  return (
    <table id="side-menu">
      <tbody>
        <tr>
          <th className="table-heading">
            iPod <i className="fas fa-home"></i>
          </th>
        </tr>
        {menuItems.map((item, index) => (
          <tr
            key={index}
            data-option={item}
            className={index == selectedItemIndex ? "active" : ""}
          >
            <td className="table-item">
              {item.charAt(0).toUpperCase() + item.slice(1)}
              <i className="fas fa-chevron-right"></i>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default SideMenu;
