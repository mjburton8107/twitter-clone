$(document).ready(function(){

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})


$(".tweet-actions").hide();
$(".stats").hide();

$("#tweet-submit").css('display', 'none');
$("#char-count").css('display', 'none');

$("#tweet-content").on("click", function(){
  $("#user-tweet-compose").css("height", "5.5em");
  $("#tweet-submit").show();
  $("#char-count").show();
})



$(".tweet-compose").keyup(function(){
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

// $('.tweet').on('mouseover', function() {
//   $(this).find('.tooltip').removeClass('shouldHide')
// })
//
// $('.tweet').on('mouseleave', function() {
//   $(this).find('.tooltip').addClass('shouldHide')
// })



$("#tweet-submit").on("click", function(){
  var userInput = $(".tweet-compose").val()
  var clone = $("#first-tweet");
  var target = $("#stream");
  var imageUrl = $('#profile-summary img').attr('src');
  console.log(imageUrl)


  var newElm = clone.clone(true);
  newElm.find("#first-avatar").attr("src",imageUrl);
  newElm.find("#first-tweet-name").html("Shia Lebouf");
  newElm.find("#first-tweet-username").html("@ShiaLB");
  newElm.find('#first-tweet-text').html(userInput);
  newElm.find('#first-num-favorites').html('0');
  newElm.find('#first-num-retweets').html('0');
  newElm.find('#first-responder-picture').hide();
  newElm.find('#first-responder-picture').hide();
  newElm.find('#second-responder-picture').hide();
  newElm.find('#first-time').html("Just now")
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
