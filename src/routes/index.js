const { send, pnf } = require("./../controller")

module.exports = (app) => {

    // default route
    app.route("/")
        .get(send)
        .post(send)

    // route not found
    app.route("*")
        .all(pnf)

}