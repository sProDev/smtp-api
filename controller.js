'use strict';

require('dotenv').config();
var library = require('./library'),
    response = require('./res');

exports.index = async (req, res) => {
    var apikey = req.query.apikey;
    if (apikey === process.env.APIKEY) {
        var from = req.query.from,
            to = req.query.to,
            subject = req.query.subject,
            text = req.query.text,
            html = req.query.html,
            filename = req.query.filename,
            fileurl = req.query.fileurl,
            attachment = {};

        if (filename && fileurl) {
            filename = decodeURIComponent(filename);
            fileurl = decodeURIComponent(fileurl);

            attachment = {
                filename: filename,
                fileurl: fileurl,
            };
        }

        if (from && to && subject && (text || html)) {
            from = decodeURIComponent(from);
            to = decodeURIComponent(to);
            subject = decodeURIComponent(subject);
            text = decodeURIComponent(text);
            html = decodeURIComponent(html);

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
