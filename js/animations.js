$(document).ready(function(){

$("#tweet-submit").css('display', 'none');
$("#char-count").css('display', 'none');

$("#tweet-content").on("click", function(){
  $("#user-tweet-compose").css("height", "5.5em");
  $("#tweet-submit").show();
  $("#char-count").show();
})

$(".tweet-compose").keydown(function(){
  var charsLeft = 140 - $(".tweet-compose").val().length;
  $("#char-count").html(charsLeft)
  if(charsLeft <= 10){
    $("#char-count").css("color", "red");
      } else if (charsLeft > 10){
        $("#char-count").css("color", "black");
      }
      if(charsLeft < 0){
        $("#tweet-submit").hide();
      }
      else if (charsLeft >= 0){
        $("#tweet-submit").show();
      }
  });

$("#tweet-submit").on("click", function(){
  var userInput = $(".tweet-compose").val()
  $("#stream").prepend(userInput);
})

})
