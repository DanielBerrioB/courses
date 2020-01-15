import React from "react";
import Item from "./Item";
import styled from "styled-components";
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
`;

class Items extends React.Component {
  state = {
    items: []
  };

  componentDidMount() {
    retrieveAllItems()
      .then(res => res.json())
      .then(res => {
        this.setState({ items: res });
      });
  }

  render() {
    return (
      <Center>
        <ItemsList>
          <Item />
          <Item />
          <Item />
        </ItemsList>
      </Center>
    );
  }
}

export default Items;
