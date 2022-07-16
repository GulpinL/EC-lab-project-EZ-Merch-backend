const loginModel = require('./login.model');
exports.signInLocal= (username, password) => loginModel.signInLocal(username, password);