import { httpSever } from './app';
import { logger } from './logger';


const config = {
  
  host: process.env.HOST,
  port: parseInt(process.env.PORT, 10),
  get url() {
    return `http://${this.host}:${this.port}`;
  }
}



httpSever.listen({ host: config.host, port: config.port }, () => {
  logger.info(`Tetris listens on ${config.url}`);
});
