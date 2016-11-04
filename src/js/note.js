window['Note'] = {
};

Note.editId = 0;
Note.isFinished = 0;

Note.open = function(){
    $('#mainContent').hide();
    $('#createNoteDialogContainer').show();
};

Note.close = function(){
    $('#createNoteDialogContainer').hide();
    $('#mainContent').show();
    Note.editId = 0;
    Note.isFinished = 0;
    $("input[type=text], textarea").val("");
    $('#radio-1').click();
};

Note.edit = function(node){
    node = $($(node).closest('li'));
    $('input[name="title"]').val(node.find(".nTitle").text());
    $('textarea').val(node.find(".nContent").text());
    let importance = parseInt(node.find(".nImportance").text())+1;
    $('#radio-'+importance.toString()).click();

    let dateText = node.find(".nDate").text().split(".");

    let temp = dateText[0];
    dateText[0]=dateText[1]
    dateText[1]=temp;
    dateText = dateText.join()

    $('#datepicker').datepicker('setDate',new Date(dateText));

    Note.editId = parseInt(node.find(".nId").text());
    Note.isFinished = parseInt(node.find(".nIsFinished").text());
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