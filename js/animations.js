$(document).ready(function(){

$(".tweet-actions").hide();
$(".stats").hide();

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
  var clone = $("#first-tweet");
  var target = $("#stream");

  var newElm = clone.clone(true);
  newElm.find("#first-avatar").attr("src",'img/alagoon.jpg');
  newElm.find("#first-tweet-name").html("Shia Lebouf");
  newElm.find("#first-tweet-username").html("@ShiaLB");
  newElm.find('#first-tweet-text').html(userInput);
  newElm.find('#first-time').html('1:30 PM - 19 Sep 13');
  newElm.find('#first-num-favorites').html('0');
  newElm.find('#first-num-retweets').html('0');
  newElm.find('#first-responder-picture').hide();
  newElm.find('#first-responder-picture').hide();
  newElm.find('#second-responder-picture').hide();
  newElm.find("#first-tweet-placeholder").attr("placeholder",'Reply to @ShiaLB');
  target.prepend(newElm);
});

  $(".tweet").hover(function () {
    $(this).find(".tweet-actions").toggle('fast');
  });


  $(".tweet").on('click', function(){
    $(this).find(".stats").show();
  })

  $(".tweet").mouseleave(function(){
    $(this).find(".stats").hide();
  })






  // var newTweet = $("#first-tweet").clone(false).prependTo("#stream");
  // $("#first-avatar").css("<img src=img/alagoon.jpg />")

  /*function(){
    $("#first-avatar").css("<img src=img/alagoon.jpg />")
    $("#first-tweet-name").html("Shia Lebouf");
    $("#first-tweet-username").html("@ShiaLB");
    $("first-tweet-text").html(userInput);
  });
  $(newTweet).prependTo("#stream");*/

});
