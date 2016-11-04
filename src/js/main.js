document.write('<script src="js/util.js"></script>');
document.write('<script src="js/storage.js"></script>');
document.write('<script src="js/notelist.js"></script>');
document.write('<script src="js/note.js"></script>');

$.fn.stars = function() {
    return $(this).each(function() {
        // Get the value
        var val = parseFloat($(this).html());
        // Make sure that the value is in 0 - 5 range, multiply to get width
        var size = Math.max(0, (Math.min(5, val))) * 18;
        // Create stars holder
        var $span = $('<span />').width(size);
        // Replace the numerical value with stars
        $(this).html($span);
    });
}

$( document ).ready(function() {

    //jqueryui initialization
    $("#datepicker").datepicker({ dateFormat: 'dd.mm.yy' });
    $("#importanceInput input").checkboxradio();
    $("#importanceInput").controlgroup();
    $("#dialog").dialog({
        autoOpen: false,
        modal: true
    });

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
        NoteList.addNote();
    });

    $('#mainContent select').on("change",function(){
        NoteList.render();
    });

    $('#switchStyle').on("click",function(){
        $('body').toggleClass("switched");
    });

    $('#switchFinished').on("click",function(){
        $('body').toggleClass("showFinished");
        $(this).text("Show Finished");
        $('body.showFinished #switchFinished').text("Hide Finished");
    });

});