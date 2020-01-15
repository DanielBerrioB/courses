import React from "react";
import ItemStyles from "../styles/ItemStyles";

class Item extends React.Component {
  render() {
    return (
      <ItemStyles>
        <div className="top">
          <img
            src="https://test.mytablemesa.com/Content/uploads/887e9a8d-292d-4db1-924b-c38958712f92.jpg"
            alt="Simple"
          />
          <span>3 Credits</span>
        </div>
        <div className="body">
          <h4>Professional Ethics</h4>
          <p>Balance education</p>
        </div>
        <div className="bottom">
          <p>$14.5</p>
          <p>
            Score 1-5: 4.15
          </p>
        </div>
      </ItemStyles>
    );
  }
}

export default Item;
