import { MongoClient } from 'mongodb';

export class MongoConnection {

    constructor( public client: MongoClient ){}
    
    static async CreateConnection( mongoURL: string): Promise<MongoConnection | void> {

        try {
            const client = new MongoClient(mongoURL);
    
            await client.connect();
    
            return new MongoConnection(client);

        } catch(err) {

            console.error(err);

        }
    }

    async close(): Promise<void> {

        await this.client.close();

    }
}