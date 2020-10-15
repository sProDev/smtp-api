'use strict';

require('dotenv').config();
const library = require('./library');
const response = require('./res');

exports.index = async (req, res) => {
    var apikey = req.query.apikey;
    if (apikey) {
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
            response.disapprove('Bad request', res);
        }
    } else {
        response.disapprove('Forbidden', res);
    }
};