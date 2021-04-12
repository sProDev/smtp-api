const { empty } = require("./../helper")
const { smtp } = require("./../middleware")
const { approve, disapprove } = require("./../response")

const send = (request, response) => {
    let apiKey = request.body.apikey ?
        request.body.apikey : (request.query.apikey ?
            request.query.apikey : "")

    if (apiKey !== process.env.APIKEY) {
        let data = {
            information: "You must use an API key to authenticate each request to the Private SMTP API. For additional information, please refer to https://github.com/sooluh/smtp-api#readme"
        }

        response.status(403)
        return disapprove(data, response)
    }

    // from
    let from = request.body.from ?
        request.body.from : (request.query.from ?
            request.query.from : "")
    // to
    let to = request.body.to ?
        request.body.to : (request.query.to ?
            request.query.to : "")
    // subject
    let subject = request.body.subject ?
        request.body.subject : (request.query.subject ?
            request.query.subject : "")
    // text
    let text = request.body.text ?
        request.body.text : (request.query.text ?
            request.query.text : "")
    // html
    let html = request.body.html ?
        request.body.html : (request.query.html ?
            request.query.html : "")
    // file name
    let filename = request.body.filename ?
        request.body.filename : (request.query.filename ?
            request.query.filename : "")
    // file url
    let fileurl = request.body.fileurl ?
        request.body.fileurl : (request.query.fileurl ?
            request.query.fileurl : "")
    // attachment
    let attachment = {}
    if (!(empty(filename)) && !(empty(fileurl))) {
        attachment = {
            filename: filename,
            fileurl: fileurl
        }
    }

    if (
        !(empty(from)) &&
        !(empty(to)) &&
        !(empty(subject)) &&
        (
            !(empty(text)) ||
            !(empty(html))
        )
    ) {
        /* prevent 502 in vercel */
        let processing = true
        setTimeout(() => {
            if (processing) {
                processing = false

                let data = {
                    information: "Request accepted! Process still running but request exited."
                }

                response.status(202)
                return approve(data, response)
            }
        }, 9250)

        smtp(from, to, subject, text, html, attachment)
            .then((results) => {
                processing = false

                approve(results, response)
            })
            .catch((error) => {
                processing = false

                response.status(500)
                disapprove(error, response)
            })
    } else {
        let data = {
            information: "Invalid request. Missing the \"from\", \"to\", \"subject\", \"text\" or \"html\" parameter."
        }

        response.status(400)
        disapprove(data, response)
    }
}

const pnf = (request, response) => {
    let data = {
        information: "Maaf, endpoint ini sepertinya tidak tersedia"
    }

    response.status(404)
    disapprove(data, response)
}

module.exports = {
    send,
    pnf
}