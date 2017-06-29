const restify = require('restify');
const logger = require(__base + '/app/lib/logger');
const Router = require(__base + 'app/server/router');

class Server {
  constructor () {
    this.server = restify.createServer();
    this.server.use(restify.bodyParser());
    this.router = new Router(this.server);
    this.server.listen(process.env.PORT, () => {
        logger.info('Server running on port ', process.env.PORT);
    });
  }
}
const server = new Server();
module.exports = server;
