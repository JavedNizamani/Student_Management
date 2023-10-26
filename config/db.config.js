const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    DATABASE : process.env.PGDATABASE,
    USER     : process.env.PGUSER,
    PASSWORD : process.env.PGPASSWORD,
    HOST     : process.env.PGHOST
}