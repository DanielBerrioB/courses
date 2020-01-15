const url =
  "https://test.mytablemesa.com/api/courses?orderBy=popularity+desc&expand=provider&name=";

const retrieveAllItems = () => {
  return fetch(url);
};

module.exports = { retrieveAllItems };
