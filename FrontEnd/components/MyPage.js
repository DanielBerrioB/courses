import React from "react";
import Meta from "./Meta";
import Header from "./Header";
import { theme } from "../utils/theme";
import { Provider } from "react-redux";
import store from "../store";
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

/**
 * This class wraps the provider for Redux, then puts
 * a standard theme for the app, and finally adds the Meta, the Header 
 * and the Content components
 */
class MainPage extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <StyledMainPage>
            <Meta />
            <Header />
            <Content>{this.props.children}</Content>
          </StyledMainPage>
        </ThemeProvider>
      </Provider>
    );
  }
}

export default MainPage;
