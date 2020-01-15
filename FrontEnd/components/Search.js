import React from "react";
import updateSearch from "../store/search/action";
import { connect } from "react-redux";
import { FaSearch } from "react-icons/fa";
import debounce from "lodash.debounce";
import styled from "styled-components";

const Input = styled.input`
  width: fit-content;
  height: 50px;
  font-size: 15px;
  border: none;
  margin-left: 10px;
`;

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.searchValue = React.createRef();
  }

  onHandleChange = () => {
    this.props.updateSearch(this.searchValue.current.value);
  };

  debounceChange = debounce(this.onHandleChange, 150);

  render() {
    return (
      <div>
        <FaSearch color={"#0083f4"} />
        <Input
          placeholder="Search all items"
          type="search"
          ref={this.searchValue}
          onChange={this.debounceChange}
        />
      </div>
    );
  }
}

export default connect(null, { updateSearch })(Search);
