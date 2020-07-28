function setup() {
  noCanvas();
  
  let number = floor(random(10000));

  let bot = new RiveScript();
  bot.loadFile("brain.rive").then(brainReady).catch(brainError);

  let button = select("#submit");
  let userInput = select("#user_input");
  let output = select("#output");
  let guesses = document.getElementById("guesses");

  function brainReady() {
    console.log("brain ready");
    bot.sortReplies();
    bot.reply("local-user", "set " + number);
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
      let guess = document.createElement("span");
      guess.className += "guess"
      guess.innerHTML = input + " "
      guesses.appendChild(guess)    
    })
    console.log("Finished chat");
  }
}





