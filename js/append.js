var input;

// function talkOutput(input) {
//   $('.list-all').prepend("<li class='bubble-left'><span>"+input+"</span></li>");
//   console.log ("ok");
// }

function formatBubbleLeft() {
  $(".bubble-left:contains(@)").css("font-style", "italic");
  $(".bubble-left:contains(@)").css("font-family", "Open Sans Condensed");
}

function stayVisible(){
var objDiv1 = document.getElementById("stayVisible");
objDiv1.scrollTop = objDiv1.scrollHeight;
}
