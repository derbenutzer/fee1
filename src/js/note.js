window['Note'] = {
};

Note.open = function(){
    $('#mainContent').hide();
    $('#createNoteDialogContainer').show();
};

Note.close = function(){
    $('#createNoteDialogContainer').hide();
    $('#mainContent').show();
};

Note.edit = function(){
    //todo: prefill form with data prevent id creation
    Note.open();
};

Note.compareCreationDate = function(n1, n2) {
    return moment(n2.created).isBefore(n1.created);
};

Note.compareImportance = function(n1, n2) {
    return n2.importance - n1.importance;
};

Note.compareDueDate = function(n1, n2) {
    return moment(n2.dateToCompare).isBefore(n1.dateToCompare, 'day');
};