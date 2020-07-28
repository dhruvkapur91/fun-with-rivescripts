let number = 37555;

function setup() {
  noCanvas();


  let bot = new RiveScript();
  bot.loadFile("brain.rive").then(brainReady).catch(brainError);

  let button = select("#submit");
  let userInput = select("#user_input");
  let output = select("#output")

  function brainReady() {
    console.log("brain ready");
    bot.sortReplies();
    button.mousePressed(chat);
  }

  function brainError() {
    console.log("brain error");
  }

  function chat() {
    let input = userInput.value();
    bot.reply("local-user", input).then(function(reply){
      console.log("Finished reply");
      output.html(reply);
    })
    console.log("Finished chat");
  }
}





