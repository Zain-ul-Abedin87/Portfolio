import React, { useContext, useState } from "react";
import StyleContext from "../../contexts/StyleContext";
import "./ToggleSwitch.scss";
const ToggleSwitch = () => {
    const {isDark} = useContext(StyleContext);
    const [isChecked,setIsChecked] = useState(isDark);
    const styleContext = useContext(StyleContext);
    
  return (
    <label className="switch">
      <input type="checkbox"
      checked={isDark}
      onChange={()=>{
          styleContext.changeTheme();
          setIsChecked(!isChecked)
      }}
       />
      <span className="slider round"></span>
    </label>
  );
};

export default ToggleSwitch;
