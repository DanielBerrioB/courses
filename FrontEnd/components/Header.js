import React from "react";
import Nav from "./Nav";
import Search from "./Search";
import Link from "next/link";
import styled from "styled-components";

const StyledHeader = styled.header`
  .bar {
    background-color: ${props => props.theme.blue};
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: stretch;
    @media (max-width: 1300px) {
      grid-template-columns: 1fr;
      justify-content: center;
    }
  }
  .sub-bar {
    display: flex;
    margin-top: 20px;
    width: 100%;
    grid-template-columns: auto 1fr;
    border-bottom: 1px solid ${props => props.theme.lightGrey};
  }
`;

const MainTitle = styled.h1`
  font-size: 3rem;
  margin-left: 2rem;
  position: relative;
  transform: skew(-7deg);
  a {
    padding: 0.5rem 1rem;
    background: ${props => props.theme.blue};
    color: white;
    text-transform: uppercase;
    text-decoration: none;
  }
  @media (max-width: 1300px) {
    margin: 0;
    text-align: center;
  }
`;

class Header extends React.Component {
  render() {
    return (
      <StyledHeader>
        <div className="bar">
          <MainTitle>
            <Link href="/">
              <a>Courses</a>
            </Link>
          </MainTitle>
          <Nav />
        </div>
        <div className="sub-bar">
          <Search />
        </div>
      </StyledHeader>
    );
  }
}

export default Header;
