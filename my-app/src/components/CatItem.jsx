import React from "react";

function CatItem(props) {
  return (
    <li>
      <img src={props.imgs} style={{ width: "150px" }} />
    </li>
  );
}
export default CatItem;
