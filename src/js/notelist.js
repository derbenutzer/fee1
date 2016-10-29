window['NoteList'] = {
};

NoteList.list = Storage.getList();

NoteList.render = function(){

    //compareMethod = compareMethod || Note.compareDueDate;

    compareMethod = NoteList.getCurrentlySelectedSort($('#mainContent select'));

    //handlebars renderData
    var noteListTemplateText = $('#noteListTemplateText').html();
    var createNoteListHtml = Handlebars.compile (noteListTemplateText);

    $('#mainContent ul').remove();
    $('#mainContent h2').remove();
    $('#mainContent').append (createNoteListHtml(NoteList.getSortedList(compareMethod)));
};

NoteList.addNote = function() {


    //todo: CleanUp note.date = x; note.title = x; etc.
    var dateToCompare=new Date($('#datepicker').val());
    var date = moment(dateToCompare).format('ll');
    var title=$('input[name="title"]').val();
    var content=$('textarea').val();
    var importance=+$('#importanceInput .ui-state-active').attr("data-importance");
    var created = new Date();
    var note = {date:date,dateToCompare:dateToCompare,created:created, title: title, finished:0, content:content,importance:importance};
    note.id=(NoteList.list.length+1);
    NoteList.list.push(note);
    Storage.storeList(NoteList.list);

    NoteList.render();
};

NoteList.getSortedList = function(sortMethod){
    return NoteList.list.sort(sortMethod);
}

NoteList.storeList = function(notelist){
    Storage.storeList(notelist);
}

NoteList.getList = function(){
    return Storage.getList();
}

NoteList.getCurrentlySelectedSort = function(node){
    switch(node.val()) {
        case "date":
            return Note.compareDueDate;
            break;
        case "creationDate":
            return Note.compareCreationDate;
            break;
        case "importance":
            return Note.compareImportance;
            break;
        default:
            return Note.compareCreationDate;
    }
};