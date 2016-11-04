var express = require('express');
var router = express.Router();
var notes = require('../controller/notes.js');

router.get('/', function(request, response){
    response.sendfile('src/index.html');
});
router.get("/get", notes.getNotes);
router.post("/store", notes.storeNotes);

router.get('/', function(request, response){
    response.sendFile('src/index.html');
});

module.exports = router;


