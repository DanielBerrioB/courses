import React from "react";
import Meta from "./Meta";
import Header from "./Header";
import { theme } from "../utils/theme";
import styled, { ThemeProvider } from "styled-components";

const StyledMainPage = styled.div`
  background-color: white;
  color: ${props => props.theme.black};
  font-family: "Raleway", sans-serif;
`;

const Content = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
`;

class MainPage extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledMainPage>
          <Meta />
          <Header />
          <Content>{this.props.children}</Content>
        </StyledMainPage>
      </ThemeProvider>
    );
  }
}

export default MainPage;
