var express = require('express');
var router = express.Router();
var notes = require('../controller/notes.js');

router.get('/', function(request, response){
    response.sendFile("src/index.html", {"root":__dirname.replace("\\server\\routes","")});
});
router.get("/get", notes.getNotes);
router.post("/store", notes.storeNotes);

module.exports = router;


