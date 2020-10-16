'use strict';

require('dotenv').config();
var library = require('./library'),
    response = require('./res');

exports.index = async (req, res) => {
    var apikey = req.body.apikey;
    if (apikey === process.env.APIKEY) {
        var from = req.body.from,
            to = req.body.to,
            subject = req.body.subject,
            text = req.body.text,
            html = req.body.html,
            filename = req.body.filename,
            fileurl = req.body.fileurl,
            attachment = {};

        if (filename && fileurl) {
            attachment = {
                filename: filename,
                fileurl: fileurl,
            };
        }

        if (from && to && subject && (text || html)) {
            await library.smtp(from, to, subject, text, html, attachment)
                .then((results) => {
                    response.approve(results, res);
                })
                .catch((error) => {
                    response.disapprove(error, res);
                });
        } else {
            response.disapprove("Invalid request. Missing the 'from', 'to', 'subject', 'text' or 'html' parameter.", res);
        }
    } else {
        response.disapprove('You must use an API key to authenticate each request to the Private SMTP API. For additional information, please refer to https://github.com/sProDev/smtp-api', res);
    }
};
