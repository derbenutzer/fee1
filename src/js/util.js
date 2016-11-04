$.fn.stars = function() {
    return $(this).each(function() {
        var val = parseFloat($(this).html());
        var size = Math.max(0, (Math.min(5, val))) * 18;
        var $span = $('<span />').width(size);
        $(this).html($span);
    });
}

addNoteListEventHandlers = function(){

    $('#noteList input').on("change",function(e){
        let listItem = $(e.currentTarget).parent()
        let id = listItem.find("div.nId").text();
        let finishedNode = listItem.find("div.nIsFinished");

        if(finishedNode.text() === "1"){
            finishedNode.text("0");
            listItem.removeClass("isFinished");
        }
        else{
            finishedNode.text("1");
            listItem.addClass("isFinished");
        }
        NoteList.toggleFinished(id);
    });

}

initializeUIElements = function(){
    $("#datepicker").datepicker({ dateFormat: 'dd.mm.yy' });
    $("#importanceInput input").checkboxradio();
    $("#importanceInput").controlgroup();
    $("#dialog").dialog({
        autoOpen: false,
        modal: true
    });
}

addEventHandlers = function(){
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
}