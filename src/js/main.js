document.write('<script src="js/util.js"></script>');
document.write('<script src="js/storage.js"></script>');
document.write('<script src="js/notelist.js"></script>');
document.write('<script src="js/note.js"></script>');



$( document ).ready(function() {

    //jqueryui initialization
    $("#datepicker").datepicker();
    $("#importanceInput input").checkboxradio();
    $("#importanceInput").controlgroup();

    NoteList.render();

    $('#createNote').click(function(){
        Note.open();
    });

    $('#createNoteCancel').click(function(e){
        e.preventDefault();
        Note.close();
    });


    $('#createNodeSubmit').click(function(e){
        e.preventDefault();
        $('#createNoteDialogContainer').hide();
        $('#mainContent').show();
        NoteList.addNote();
    });

    $('#mainContent select').on("change",function(){
        NoteList.render();
    });

});