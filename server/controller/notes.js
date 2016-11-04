var store = require("../services/notesStore.js");

module.exports.getNotes = function (req, res) {
  store.get(function (err, notes) {
    res.end(JSON.stringify(notes));
  });
};

module.exports.storeNotes = function (req) {
  store.store(req.body);
};

module.exports.start = function () {
    res.end("index.html");
};