const e = require('express');
const loginService = require('./login.service');
const { v4: uuid4 } = require('uuid');
const nodemailer = require('nodemailer');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const saltRounds = 10;


exports.signInLocal = async (req, res) => {
    try {
        const { username, password } = req.body.dataSend;
        console.log('signInLocal ',req.body.dataSend);
        const account = await loginService.signInLocal(username, password);

        if (account.length) {
            const isMatch = await bcrypt.compare(password, account[0].password);
            if (isMatch) {
                const info = { id: account[0].id};
                const token = jwt.sign(info, process.env.JWT_SECRET, { expiresIn: '24h' });
                return res.status(200).json({ token: token, userId: account[0].id,flag:'1' });
            }
            else {
                return res.status(200).json({ message: 'Password is not correct',flag:'0' });
            }
        } else {
            return res.status(200).json({ message: 'Username is not exit',flag:'-1' });
        }
    } catch (error) {
        return res.status(401).json({ message: error.message,flag:'-2' });
    }



}