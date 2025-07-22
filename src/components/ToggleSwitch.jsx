import { useState, useEffect } from "react";
import "./Styles/ToggleSwitch.css";
import { FaUserGraduate } from "react-icons/fa";

const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  const toggle = () => setIsOn(!isOn);

  // Change background color of body
  useEffect(() => {
    document.body.style.backgroundColor = isOn ? "#2196f3" : "#ffeb3b";
  }, [isOn]);

  return (
    <div className="page-center">
      <h1 style={{ color: isOn ? "white" : "black", transition: "0.3s ease" }}>
        Hello User <FaUserGraduate />
      </h1>

      <div className="toggle-container">
        <div className={`switch ${isOn ? "on" : "off"}`} onClick={toggle}>
          <div className="slider">{isOn ? "ON" : "OFF"}</div>
        </div>
      </div>
    </div>
  );
};

export default ToggleSwitch;
