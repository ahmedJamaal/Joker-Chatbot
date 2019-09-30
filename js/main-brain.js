console.log("hello mother fucker");

function botReady(){
			console.log("bot is ready");
		}

function botNotReady(err){
 console.log("An error has occurred.");
}

function MainBot(message)
{
	let bot = new RiveScript();
	console.log(message);
	console.log("bot ="+bot);

	bot.loadFile('brain.rive').then(botReady).catch(botNotReady);
	var output;


	var x=message.search("birthday");
  console.log("x="+x);
	if(message.search("birthday"))
	{
		output="el 3omr koloA";
	}
	else
	{
		output="you are Done";
	}


setTimeout(function() {
    ReplyMassage(output);
}, 4000)
};
