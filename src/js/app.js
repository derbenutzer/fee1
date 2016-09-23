$( document ).ready(function() {

    $("h1").text("My Notes");

    var notelist = [
        {id:01, date:'01.01.1990', title: 'do stuff', finished:false, content:"I need to do something"},
        {id:02, date:'01.01.1990', title: 'do stuff', finished:false, content:"I need to do something"},
        {id:03, date:'01.01.1990', title: 'do stuff', finished:false, content:"I need to do something"},
        {id:04, date:'01.01.1990', title: 'do stuff', finished:false, content:"I need to do something"}
        ];

    var noteListTemplateText = $('#noteListTemplateText').html();
    var createNoteListHtml = Handlebars.compile (noteListTemplateText);
    var renderData = function () {
        console.log("render");
        $(document.body).append (createNoteListHtml (notelist));
    };
    renderData();
});