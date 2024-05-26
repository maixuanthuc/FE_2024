const mysql = require('mysql');

const config = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'fe_2024'  // Ensure this is your actual database name
};

const connection = mysql.createConnection(config);

connection.connect((err) => {
    if (err) {
        console.log('Error connecting: ' + err.stack);
        return;
    }
    console.log('Connected successfully to DB.');

``
    const insertUserQuery = `
        INSERT INTO users (username, password) VALUES ('testuser1', 'testpassword3');
    `;

    connection.query(insertUserQuery, (err, results, fields) => {
        if (err) {
            console.log('Error inserting user: ' + err.stack);
            return;
        }
        console.log('User inserted successfully.');

        // Close the connection after the query
        connection.end((err) => {
            if (err) {
                console.log('Error ending connection: ' + err.stack);
                return;
            }
            console.log('Connection closed successfully.');
        });
    });
});

module.exports = {
    connection
};
