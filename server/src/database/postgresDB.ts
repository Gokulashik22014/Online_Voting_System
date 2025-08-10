import { Client } from "pg";
import dotenv from "dotenv";
import { IDB } from "../interfaces/IDB.js";

dotenv.config();
class PostgreSQLDB implements IDB {
  DB_USER = process.env.DB_USER as string;
  DB_PASSWORD = process.env.DB_PASSWORD as string;
  PORT = parseInt(process.env.DB_PORT as string);

  dbConfig = {
    user: this.DB_USER,
    password: this.DB_PASSWORD,
    port: this.PORT,
  };

  client=new Client(this.dbConfig)
}

export const client=new PostgreSQLDB().client
