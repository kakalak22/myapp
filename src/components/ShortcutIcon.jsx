import React, { useEffect, useState } from "react";
import Facebook from "../asset/facebook.svg";

const ShortcutIcon = ({ iconList, onLoading, isLoading }) => {
  const [isSkeletonLoading, setIsSkeletionLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      onLoading();
    }, 300);
  }, [iconList]);
  useEffect(() => {
    setIsSkeletionLoading(true);
    setTimeout(() => {
      setIsSkeletionLoading(false);
    }, 1500);
  }, [isLoading]);
  console.log(isSkeletonLoading);
  return (
    <div className={`shortcut-list ${isLoading ? "hide" : "show"}`}>
      {iconList.length > 0 ? (
        iconList.map((icon) => (
          <div key={icon.id} className="icon-container">
            <div
              className={`icon-wrapper ${
                isSkeletonLoading ? "skeleton" : null
              }`}
            >
              {isSkeletonLoading ? null : (
                <img className="icon" src={icon.img} alt="" />
              )}
            </div>
            {isSkeletonLoading ? (
              <div className="icon-name skeleton"></div>
            ) : (
              <p>{icon.name}</p>
            )}
          </div>
        ))
      ) : (
        <h3>No icon match search</h3>
      )}
    </div>
  );
};

export default ShortcutIcon;
