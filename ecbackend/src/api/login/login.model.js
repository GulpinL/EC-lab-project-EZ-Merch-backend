const db = require('../../executeDatabase');

exports.signInLocal= (username, password) => db.execute(
    `
    SELECT a.id,a.password, a.role, a.email
    FROM user a
    WHERE a.email='${username}'
    `
)


exports.register =(fullName,phoneNumber,email,password,address) => db.execute(
    `
    INSERT INTO user (fullName, phoneNumber, email, password,address,role)
    VALUES ('${fullName}', '${phoneNumber}', '${email}','${password}','${address}','1');
    `
)