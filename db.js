const { Client } = require("pg");
const { getDatabaseUri } = require("./config");


let db;


// if(process.env.NODE_ENV === 'test') {
//     DB_URI = "postgresql:///estate_management_test"
// } else {
//     DB_URI = "postgresql:///estate_management";
// }

// let db = new Client({
//     connectionString: DB_URI
// });

if(process.env.NODE_ENV === 'test') {
    db = new Client({
        connectionString: getDatabaseUri()
    })
} else {
    db = new Client({
        connectionString: getDatabaseUri(),
        ssl: {
            rejectUnauthorized: false
        }
    })
}



db.connect();

module.exports = db;

