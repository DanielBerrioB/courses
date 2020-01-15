import React from "react";
import ItemStyles from "../styles/ItemStyles";

class Item extends React.Component {
  render() {
    const { item } = this.props;
    return (
      <ItemStyles>
        <div className="top">
          <img
            src="https://images.freeimages.com/images/small-previews/b5a/dragon-fly-1391358.jpg"
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
