
let randomNumber =0;

$(".play").click(function(){
  let userText = $("input").val();
  $(".userChoice").text(userText);
  
  randomNumber = Math.random();
  $(".computerChoice").text(randomNumber);
  
})