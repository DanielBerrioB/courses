import { retrieveItems, retrieveByName } from "./apiCalls";

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

export async function dataFromName(name, counter) {
  let newData = await retrieveByName(name, counter * 6);
  newData = await newData.json();
  return newData;
}

export async function newDataRetrieved(counter) {
  let newData = await retrieveItems(counter * 6); //Six means the number of items initially
  newData = await newData.json();
  return newData;
}
