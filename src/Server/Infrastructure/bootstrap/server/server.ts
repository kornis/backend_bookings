import express, { Application } from 'express';

export default class Server {

    public app: Application;
    public port: number;

    constructor( port: number ) {
        this.port = port;
        this.app = express();
        this.app.use(express.json());
    }

    static init( port: number ) {
        return new Server(port);
    }

    start( cb: VoidFunction ){
        this.app.listen(this.port, cb);
    }
}