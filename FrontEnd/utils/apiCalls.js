const url =
  "https://test.mytablemesa.com/api/courses?orderBy=popularity+desc&expand=provider";

const retrieveItems = limit => {
  return fetch(`${url}&limit=${limit}`, { method: "GET" });
};

const retrieveByName = (name, limit) => {
  return fetch(`${url}&name=${name}&limit${limit}`, { method: "GET" });
};

module.exports = { retrieveItems, retrieveByName };
