import App from "next/app";
import MyPage from "../components/MyPage";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <MyPage>
        <Component {...pageProps} />
      </MyPage>
    );
  }
}

export default MyApp;
