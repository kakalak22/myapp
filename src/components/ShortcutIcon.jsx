import React from "react";
import Facebook from "../asset/facebook.svg";

const ShortcutIcon = ({ iconList }) => {
  return (
    <div className="shortcut-list">
      {iconList.length > 0 ? (
        iconList.map((icon) => (
          <div key={icon.id} className="icon-container">
            <div className="icon-wrapper">
              <img className="icon" src={icon.img} alt="" />
            </div>
            <p>{icon.name}</p>
          </div>
        ))
      ) : (
        <h3>No icon match search</h3>
      )}
    </div>
  );
};

export default ShortcutIcon;
