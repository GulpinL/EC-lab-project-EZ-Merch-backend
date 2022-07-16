const db = require('../../executeDatabase');

exports.signInLocal= (username, password) => db.execute(
    `
    SELECT a.id,a.email,a.password
    FROM User a
    WHERE a.email='${username}'
    `
)