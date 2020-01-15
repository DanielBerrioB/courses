import React from "react";
import Item from "./Item";
import styled from "styled-components";
import { connect } from "react-redux";
import { newDataRetrieved, dataFromName } from "../utils/helpers";

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
  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }
`;

class Items extends React.Component {
  state = {
    items: [],
    scrollCounter: 1
  };

  componentDidMount() {
    window.onscroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        console.log(this.state.scrollCounter);
        this.setState({ scrollCounter: this.state.scrollCounter + 1 });
        newDataRetrieved(this.state.scrollCounter).then(data => {
          this.setState({ items: data.items });
        });
      }
    };

    newDataRetrieved(this.state.scrollCounter).then(data => {
      this.setState({ items: data.items });
    });
  }

  componentWillUnmount() {
    window.onscroll = null;
  }

  componentWillReceiveProps() {
    if (this.props.searchValue.length > 0) {
      console.log(this.props.searchValue.length);
      let filterData = this.state.items.filter(e =>
        e.name.includes(this.props.searchValue)
      );
      if (filterData.length === 0) {
        dataFromName(this.props.searchValue, this.state.scrollCounter).then(
          res => {
            this.setState({ items: res.items, scrollCounter: 1 });
          }
        );
      } else {
        this.setState({ items: filterData, scrollCounter: 1 });
      }
    }
    if (this.props.searchValue.length <= 1) {
      newDataRetrieved(this.state.scrollCounter).then(data => {
        this.setState({ items: data.items });
      });
    }
  }

  render() {
    const { items } = this.state;
    return (
      <Center>
        <ItemsList>
          {items.length > 0 && items.map(e => <Item key={e.id} item={e} />)}
        </ItemsList>
      </Center>
    );
  }
}

const mapStateToProps = state => {
  return { searchValue: state.searchReducer.searchValue };
};

export default connect(mapStateToProps)(Items);
