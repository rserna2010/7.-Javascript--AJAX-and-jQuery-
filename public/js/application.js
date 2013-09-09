$(document).ready(function(){
  $("#get_color").on('click', function() {
    $.ajax({
      url: '/color',
      type: 'post',
    }).done(function(server_data){
        $("#color_me :nth-child(" + server_data.cell+ ")").css("background-color", "" + server_data.color + ""
        );
    });
  });
});
