export function detectBottomWindow() {
  window.onscroll = () => {
    if (
      window.innerHeight + window.scrollY >=
      document.body.offsetHeight - 200
    ) {
      console.log("Bottom of the page");
    }
  };
}
