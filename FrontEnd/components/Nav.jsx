import React from "react";
import Link from "next/link";
import NavStyles from "../styles/NavStyles";

class Nav extends React.Component {
  render() {
    return (
      <NavStyles>
        <Link href="/">
          <a>Courses</a>
        </Link>
        <Link href="/">
          <a>Educators</a>
        </Link>
      </NavStyles>
    );
  }
}

export default Nav;
