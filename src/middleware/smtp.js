const nodemailer = require('nodemailer')
const { isEmptyObject, empty } = require('./../helper')

let transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
    }
})

module.exports = (from, to, subject, text = '', html = '', attachment = {}) => {
    return new Promise((resolve, reject) => {

        let message = {
            from: from,
            to: to,
            subject: subject
        }

        if (empty(html.trim())) {
            message.text = text
        } else {
            message.html = html
        }

        if (!(isEmptyObject(attachment))) {
            message.attachments = [
                {
                    filename: attachment.filename,
                    path: attachment.fileurl
                }
            ]
        }

        transport.sendMail(message, (error, info) => {
            if (error) return reject(error)

            resolve(info)
        })

    })
}