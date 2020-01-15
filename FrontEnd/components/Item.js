import React from "react";
import ItemStyles from "../styles/ItemStyles";

class Item extends React.Component {
  render() {
    const { item } = this.props;
    return (
      <ItemStyles>
        <div className="top">
          <img
            src="https://images.unsplash.com/photo-1546448396-6aef80193ceb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            alt="Simple"
          />
          <span>{item.maximumCredits} credits</span>
        </div>
        <div className="body">
          <h4>{item.name}</h4>
          <p>{item.imageText}</p>
        </div>
        <div className="bottom">
          <p id="price">{item.price === 0 ? "FREE" : `$${item.price}`}</p>
          <p>Score 1-5: {item.rating}</p>
        </div>
      </ItemStyles>
    );
  }
}

export default Item;
