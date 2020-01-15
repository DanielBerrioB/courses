import React from "react";
import Item from "./Item";
import styled from "styled-components";
import { connect } from "react-redux";
import { newDataRetrieved, dataFromName } from "../utils/helpers";

const Center = styled.div`
  text-align: center;
  margin-bottom: 20px;
  #isLoading {
    font-size: 2rem;
  }
`;

const ItemsList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 60px;
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
    max-width: 1000px;
    grid-gap: 30px;
  }
  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    max-width: 600px;
  }
`;

class Items extends React.Component {
  state = {
    items: [],
    scrollCounter: 1,
    isLoading: false
  };

  /**
   * Filtering by name when the searchValue props is
   * changed.
   */
  filterByName() {
    let filterData = this.state.items.filter(e =>
      e.name.includes(this.props.searchValue)
    );
    if (filterData.length === 0) {
      dataFromName(this.props.searchValue, this.state.scrollCounter).then(
        res => {
          this.setState({
            items: res.items,
            scrollCounter: 1,
            isLoading: false
          });
        }
      );
    } else {
      this.setState({ items: filterData, scrollCounter: 1 });
    }
  }

  componentDidMount() {
    //When the scroll is at the bottom this fuction is triggered
    window.onscroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 50
      ) {
        this.setState({ isLoading: true });
        if (this.props.searchValue.length > 0) {
          this.filterByName();
        } else {
          this.setState({ scrollCounter: this.state.scrollCounter + 1 });
          newDataRetrieved(this.state.scrollCounter).then(data => {
            this.setState({ items: data.items, isLoading: false });
          });
        }
      }
    };

    newDataRetrieved(this.state.scrollCounter).then(data => {
      this.setState({ items: data.items });
    });
  }

  componentWillUnmount() {
    window.onscroll = null;
  }

  /**
   * This function catches the searchValue props
   * when the Search component is triggered
   */
  componentWillReceiveProps() {
    if (this.props.searchValue.length > 0) {
      this.filterByName();
    }
    if (this.props.searchValue.length <= 1) {
      newDataRetrieved(this.state.scrollCounter).then(data => {
        this.setState({ items: data.items });
      });
    }
  }

  render() {
    const { items, isLoading } = this.state;
    return (
      <Center>
        <ItemsList>
          {items.length > 0 && items.map(e => <Item key={e.id} item={e} />)}
        </ItemsList>
        {isLoading && <p id="isLoading">Loading...</p>}
        {!isLoading && items.length === 0 && (
          <p>There are not courses available</p>
        )}
      </Center>
    );
  }
}

const mapStateToProps = state => {
  return { searchValue: state.searchReducer.searchValue };
};

export default connect(mapStateToProps)(Items);
