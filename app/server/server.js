import  restify from 'restify';
import  logger from '../lib/logger';
import Router from './router';

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
export default server;
