
$(document).ready(function(){
  $("#search").keyup(function(e){
    e.preventDefault();
    var formData = {
      't'             : $('input[name=q]').val()
    };
    $.ajax({
      type: "GET",
      url: 'http://www.omdbapi.com/?',
      data: formData,
      success: function (response) 
      {
        var pictureURL = response.Poster;
        console.log(response);
        $("#movie-title").html(response.Title);
        $("#movie-year").html(response.Year);
        $("#movie-country").html(response.Country);
        $("#movie-released").html(response.Released);
        $('#images').prepend($('<img>',{src: pictureURL}))


      }
    });
  });
});