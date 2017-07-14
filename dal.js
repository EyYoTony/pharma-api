const PouchDB = require('pouchdb')
const db = new PouchDB(process.env.COUCHDB_URL + process.env.COUCHDB_NAME)

function listMeds(limit, callback) {
  callback(null, { isDalOk: true })
}

const dal = {
  listMeds
}

module.exports = dal
