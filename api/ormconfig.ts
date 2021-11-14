
export default {
   "type": "mysql",
   "host": process.env.DB_HOST,
   "port": 3306,
   "username": process.env.DB_USER,
   "password": process.env.DB_PASSWORD,
   "database": process.env.DB_DATABASE,
   "synchronize": true,
   "logging": false,
   "entities": [
      "src/entities/**/*.ts"
   ],
   "migrations": [
      "src/migrations/**/*.ts"
   ],
   "subscribers": [
      "src/subscribers/**/*.ts"
   ],
   "cli": {
      "entitiesDir": "src/entities",
      "migrationsDir": "src/migrations",
      "subscribersDir": "src/subscribers"
   }
}