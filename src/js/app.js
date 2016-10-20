$( document ).ready(function() {

    //jqueryui initialization
    $( "#datepicker" ).datepicker();
    $( "#importanceInput input" ).checkboxradio();
    $( "#importanceInput" ).controlgroup();


/*    //notelist JSON
    var noteData = {"notelist":[
        {id:1, date:'01.01.1990',created:'01.01.1990', title: 'do stuff', finished:0, content:"I need to do something",importance:0},
        {id:2, date:'01.01.1990',created:'01.01.1990', title: 'do stuff', finished:0, content:"I need to do something",importance:0},
        {id:3, date:'01.01.1990',created:'01.01.1990', title: 'do stuff', finished:0, content:"I need to do something",importance:0},
        {id:4, date:'01.01.1990',created:'01.01.1990', title: 'do stuff', finished:0, content:"I need to do something",importance:0}
        ]};*/

    //save data to element
    //ToDo : use localStorage or Server
    //$('#data').data('notelist',noteData);
    // localStorage.setItem('notelist',JSON.stringify(noteData));


    //handlebars renderData
    var noteListTemplateText = $('#noteListTemplateText').html();
    var createNoteListHtml = Handlebars.compile (noteListTemplateText);
    var renderData = function () {
        try{
            var notelist = JSON.parse(localStorage.getItem('notelist')).notelist;
            displayNotelist(notelist,compareDueDate);
        }
        catch(err) {
            console.log(err.message);
        }
    };

    var displayNotelist = function(notelist, compareMethod){
        $('#mainContent ul').remove();
        $('#mainContent h2').remove();
        $('#mainContent').append (createNoteListHtml(notelist.sort(compareMethod)));
    }

    var addNote = function (note) {
        //var notelist = $('#data').data('notelist').notelist;
        if(localStorage.getItem('notelist')) {
            var notelist = JSON.parse(localStorage.getItem('notelist')).notelist;
        }
        else{
            var notelist = [];
        }
        note.id=(notelist.length+1);
        notelist.push(note);
        //$('#data').data('notelist',{"notelist":notelist});
        localStorage.setItem('notelist',JSON.stringify({"notelist":notelist}));
        renderData();
    };

    var compareCreationDate = function(n1, n2) {
        return n2.created - n1.created;
    }

    var compareImportance = function(n1, n2) {
        return n2.importance - n1.importance;
    }

    var compareDueDate = function(n1, n2) {
        return moment(n2.date).isBefore(n1.date);
    }

    $('#createNote').click(function(){
        openNoteDialog();
    });

    $('#createNoteCancel').click(function(e){
        e.preventDefault();
        closeNoteDialog();
    });

    var openNoteDialog = function(){
        $('#mainContent').hide();
        $('#createNoteDialogContainer').show();
    }

    var closeNoteDialog = function(){
        $('#createNoteDialogContainer').hide();
        $('#mainContent').show();
    }

    $('#createNodeSubmit').click(function(){
        var date=new Date($('#datepicker').val());
        date = moment(date).format('ll');
        var title=$('input[name="title"]').val();
        var content=$('input[name="content"]').val();
        var importance=+$('#importanceInput .ui-state-active').attr("data-importance");
        var created = new Date();
        addNote({date:date,created:created, title: title, finished:0, content:content,importance:importance});
    });

    $('#mainContent select').on("change",function(){

        var notelist = JSON.parse(localStorage.getItem('notelist')).notelist;

        switch(this.value) {
            case "date":
                displayNotelist(notelist,compareDueDate);
                break;
            case "creationDate":
                displayNotelist(notelist,compareCreationDate);
                break;
            case "importance":
                displayNotelist(notelist,compareImportance);
                break;
            default:
                displayNotelist(notelist,compareCreationDate);
        }
    });

    renderData();
});