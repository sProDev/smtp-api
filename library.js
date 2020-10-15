'use strict';

require('dotenv').config();
var nodemailer = require('nodemailer'),
    helper = require('./helper');

var transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

exports.smtp = async (from, to, subject, text = '', html = '', attachment = {}) => {
    return new Promise(async (resolve, reject) => {

        var message = {
            from: from,
            to: to,
            subject: subject,
        };
        if (!text.trim()) {
            message.html = html;
        } else {
            message.text = text;
        }
        if (!helper.isEmptyObject(attachment)) {
            message.attachments = [
                {
                    filename: attachment.filename,
                    path: attachment.fileurl,
                },
            ];
        }

        transport.sendMail(message, function(err, info) {
            if (err) {
                reject(err);
            } else {
                resolve(info);
            }
        });

    });
}