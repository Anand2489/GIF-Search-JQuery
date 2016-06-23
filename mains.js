function proc() {
    var api_key = "dc6zaTOxFJmzC";
    var word = $("#Text").val().replace(/ /g,'+');
    var url = "http://api.giphy.com/v1/gifs/search?api_key="+api_key+"&q="+word;

    $(".row").empty();
  $.getJSON(url,{
    type: "GET",
    dataType: "json"
  })
    .done(function( data ) {

      $.each( data.data, function( i, item ) {
        var div = $('<div>').addClass('col-lg-3 col-md-4 col-xs-6 thumb');
        var a = $('<a>').addClass('thumbnail');
        a.appendTo(div);
        var image_url = item.images.fixed_height.url;
        $( '<img>' ).addClass('img-responsive').attr('src',image_url).appendTo(div);
        div.appendTo($('.row'));
        // if ( i === 1 ) {
        //   return false;
        // }
      });
    })
    .fail(function( jqxhr, textStatus, error ) {
        var err = textStatus + ", " + error;
        console.log( "Request Failed: " + err );
    });
    
}

$(document).ready(function(){
    $("#Text").keyup(function(e){
        if (e.which == 13 || e.keyCode == 13) {     // 13 for enter key
            proc();
        }
    });

});

$(document).ready(function(){
    window.process = function(){
        console.log("testing ");
        proc();

    }
});
