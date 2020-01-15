/**
 * Middleware to check if the route does not exist.
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
function routeDoesNotExist(req, res, next) {
  res.status(404).send({
    message: "This route does not exist"
  });
}

/**
 * This function allow to reuse the current mongo client
 * to save the topology
 * @param {MongoClient} client
 */
function isAnyConnection(client) {
  return client.topology
    ? client.topology.s.state === "connected"
      ? true
      : false
    : false;
}

module.exports = { routeDoesNotExist, isAnyConnection };
