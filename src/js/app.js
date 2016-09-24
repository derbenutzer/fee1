$( document ).ready(function() {

    //jqueryui initialization
    $( "#datepicker" ).datepicker();
    $( "#importanceInput input" ).checkboxradio();
    $( "#importanceInput" ).controlgroup();


    //notelist JSON
    var noteData = {"notelist":[
        {id:1, date:'01.01.1990',created:'01.01.1990', title: 'do stuff', finished:0, content:"I need to do something",importance:0},
        {id:2, date:'01.01.1990',created:'01.01.1990', title: 'do stuff', finished:0, content:"I need to do something",importance:0},
        {id:3, date:'01.01.1990',created:'01.01.1990', title: 'do stuff', finished:0, content:"I need to do something",importance:0},
        {id:4, date:'01.01.1990',created:'01.01.1990', title: 'do stuff', finished:0, content:"I need to do something",importance:0}
        ]};

    //save data to element
    //ToDo : use localStorage or Server
    $('#data').data('notelist',noteData);


    //handlebars renderData
    var noteListTemplateText = $('#noteListTemplateText').html();
    var createNoteListHtml = Handlebars.compile (noteListTemplateText);
    var renderData = function () {
        //get data from element
        //ToDo : use localStorage or Server
        var notelist = $('#data').data('notelist').notelist;
        $('#mainContent').append (createNoteListHtml (notelist));
    };

    var addNote = function (note) {
        var notelist = $('#data').data('notelist').notelist;
        note.id=(notelist.length+1);
        notelist.push(note);
        $('#data').data('notelist',{"notelist":notelist});
    };

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

    //test addNote
    addNote({id:05, date:'01.01.1991',created:'01.01.1990', title: 'do stuff', finished:0, content:"I need to do something",importance:0});

    renderData();
});