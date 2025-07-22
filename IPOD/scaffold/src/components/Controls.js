import "./css/controls.css";
import React from "react";
import leftArrow from "./images/left-arrow.png";
import rightArrow from "./images/right-arrow.png";
import bottomArrow from "./images/arrow-pointing-downwards.png";

// introduce your own eventhandler for eac button Here.
class Controls extends React.Component {
  constructor() {
    super();
    this.wheelRef = React.createRef();
    this.dragging = false;
    this.lastAngle = null;
    this.center = { x: 0, y: 0 };
  }

  getAngle(x, y) {
    const dx = x - this.center.x;
    const dy = y - this.center.y;
    return Math.atan2(dy, dx) * (180 / Math.PI);
  }

  handleMouseDown = (e) => {
    const rect = this.wheelRef.current.getBoundingClientRect();
    this.center = {
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
    };
    this.lastAngle = this.getAngle(e.clientX, e.clientY);
    this.dragging = true;
  };

  handleMouseMove = (e) => {
    if (!this.dragging) return;

    if (e.clientY > this.center.y) {
      return;
    }

    const currentAngle = this.getAngle(e.clientX, e.clientY);
    let delta = currentAngle - this.lastAngle;

    if (delta > 180) delta -= 360;
    if (delta < -180) delta += 360;

    if (Math.abs(delta) > 15) {
      if (delta > 0) {
        this.props.onRotate("clockwise");
      } else {
        this.props.onRotate("counter");
      }
      this.lastAngle = currentAngle;
    }
  };

  handleMouseUp = () => {
    this.dragging = false;
  };

  render() {
    return (
      //add onclick to the sction
      <section id="controls">
        <div
          id="wheel"
          ref={this.wheelRef}
          onMouseDown={this.handleMouseDown}
          onMouseMove={this.handleMouseMove}
          onMouseUp={this.handleMouseUp}
        >
          <span
            id="menu-button"
            className="buttons"
            style={{ top: 20 }}
            onClick={this.props.onMenuClick}
          >
            Menu
          </span>
          <img
            className="buttons"
            draggable="false"
            src={leftArrow}
            alt="left"
            style={{ left: 13, width: 40 }}
          ></img>
          <img
            className="buttons"
            draggable="false"
            src={rightArrow}
            alt="right"
            style={{ right: 13, width: 40 }}
          ></img>
          <img
            className="buttons"
            draggable="false"
            src={bottomArrow}
            alt="bottom"
            style={{ bottom: 13, width: 30, height: 37 }}
          ></img>

          <div id="ok-button" onClick={this.props.onOkay}>
            <b>OK</b>
          </div>
        </div>
      </section>
    );
  }
}

export default Controls;
