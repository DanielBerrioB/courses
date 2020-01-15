import styled from "styled-components";
import Nav from "../components/Nav";

const NavStyles = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  justify-self: end;
  font-size: 1.5rem;
  a {
    padding: 1rem 3rem;
    display: flex;
    align-items: center;
    position: relative;
    text-transform: uppercase;
    font-size: 1em;
    background: none;
    text-decoration: none;
    color: #000;    
  }
  @media (max-width: 1300px) {
    border-top: 1px solid #ff0000;
    width: 100%;
    justify-content: center;
    font-size: 1.5rem;
  }
`;

export default NavStyles;
