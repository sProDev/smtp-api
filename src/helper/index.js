const isEmptyObject = (objects) => {
    for (var key in objects) {
        if (Object.prototype.hasOwnProperty.call(objects, key)) {
            return false
        }
    }

    return true
}

const empty = (str) => {
    return str === null || str.match(/^ *$/) !== null
}

module.exports = {
    isEmptyObject,
    empty
}