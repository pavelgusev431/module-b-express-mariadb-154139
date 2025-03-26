import Sequelize from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const sq = new Sequelize({
  dialect: "mariadb",
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: 3307,
  showWarnings: true,
  connectTimeout: 1000,
  logging: false
});

try {
    await sq.authenticate();
    await sq.truncate();
    console.log("Database connected");
} catch (error) {
    console.log(`Database connection error: ${error}`);
}

export default sq;
