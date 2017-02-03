$(document).ready(function(){

$("#tweet-submit").css('display', 'none');
$("#char-count").css('display', 'none');

$("#tweet-content").on("click", function(){
  $(".tweet-compose").css("height", "5.5em");
  $("#tweet-submit").show();
  $("#char-count").show();
})

})
