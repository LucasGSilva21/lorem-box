import { connect } from 'mongoose';

export class MongoConnection {
  private static instance?: MongoConnection;

  private constructor() {
    const mongoURI: string = process.env.MONGO_URI as string;

    connect(mongoURI);
  }

  static getInstance() {
    if (MongoConnection.instance === undefined) {
      MongoConnection.instance = new MongoConnection();
    }

    return MongoConnection.instance;
  }
}
