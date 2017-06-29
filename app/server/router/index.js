class Router {
  constructor(server) {
    server.get('ping', (req, res) => {
      return res.send(200, 'pong');
    });
  }
}
module.exports = Router;
