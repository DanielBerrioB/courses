import React from "react";
import { FaSearch } from "react-icons/fa";
import styled from "styled-components";

const Input = styled.input`
  width: fit-content;
  height: 50px;
  font-size: 15px;
  border: none;
  margin-left: 10px;
`;

class Search extends React.Component {
  render() {
    return (
      <div>
        <FaSearch color={"#0083f4"}/>
        <Input placeholder="Search all items" type="search" />
      </div>
    );
  }
}

export default Search;
