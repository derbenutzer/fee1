addNoteListEventHandlers = function(){

    $('#noteList input').on("change",function(e){
        let listItem = $(e.currentTarget).parent()
        let id = listItem.find("div.nId").text();
        let finishedNode = listItem.find("div.nIsFinished");

        console.log(finishedNode);
        console.log(finishedNode.text() === "1");

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