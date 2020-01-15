import React from "react";
import Item from "./Item";
import styled from "styled-components";
import { detectBottomWindow } from "../utils/helpers";
import { retrieveAllItems } from "../utils/apiCalls";

const Center = styled.div`
  text-align: center;
`;

const ItemsList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 60px;
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

class Items extends React.Component {
  state = {
    items: [],
    isAtTheBottom: false
  };

  componentDidMount() {
    console.log(detectBottomWindow());
    retrieveAllItems()
      .then(res => res.json())
      .then(res => {
        this.setState({ items: res.items });
      });
  }

  componentWillUnmount() {
    window.onscroll = null;
  }

  render() {
    const { items, isAtTheBottom } = this.state;
    return (
      <Center>
        <ItemsList>
          {items.length > 0 && items.map(e => <Item key={e.id} item={e} />)}
        </ItemsList>
        {isAtTheBottom && <p>Verdadero</p>}
      </Center>
    );
  }
}

export default Items;
