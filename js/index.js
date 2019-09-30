let bot = new RiveScript();


bot.loadFile('js/rive/brain.rive').then(botReady).catch(botNotReady);


$('.send').click(function() {
  message = $(".message-input input").val();
  if($.trim(message) == '') {
    return false;
  }
  else
  selfReply(message);
});


$(window).on('keydown', function(e) {
  message = $(".message-input input").val();
  if (e.which == 13 && ! $.trim(message) == '') {
    selfReply(message);
    console.log("e.which ="+e.which);
    return false;
  }
});

function botReply(message){

  //console.log("message from botReply ="+message);
  var hight=scrollChat();
  $('<li class="sent"><img src="img/robot.png" alt="" /><p>' + message + '</p></li>').appendTo($('.messages ul'));
  $('.message-input input').val(null);
  $('.contact.active .preview').html('<span>You: </span>' + message);
  	$(".messages").animate({ scrollTop: hight }, "fast");
}

function selfReply(message){

  // console.log("message from selfReply ="+message);
  // console.log(bot.reply("local-user", message));
  var hight=scrollChat();
  $('<li class="replies"><img src="img/cartoon-me.png" alt="" /><p>' + message + '</p></li>').appendTo($('.messages ul'));
	$('.message-input input').val(null);
	$('.contact.active .preview').html('<span>You: </span>' + message);
  $(".messages").animate({ scrollTop: hight }, "fast");
  bot.reply("local-user", message).then(function(reply) {
    //window.setTimeout(botReply(reply) ,2000);
    setTimeout(function() {
    botReply(reply);
}, 3000)

  });
}

function botReady(){
  bot.sortReplies();
  botReply('What are you interested in ?');
}

function botNotReady(err){
  console.log("An error has occurred.", err);
}







$(".messages").animate({ scrollTop: $(document).height() }, "fast");

$("#profile-img").click(function() {
	$("#status-options").toggleClass("active");
});

$(".expand-button").click(function() {
  $("#profile").toggleClass("expanded");
	$("#contacts").toggleClass("expanded");
});

$("#status-options ul li").click(function() {
	$("#profile-img").removeClass();
	$("#status-online").removeClass("active");
	$("#status-away").removeClass("active");
	$("#status-busy").removeClass("active");
	$("#status-offline").removeClass("active");
	$(this).addClass("active");

	if($("#status-online").hasClass("active")) {
		$("#profile-img").addClass("online");
	} else if ($("#status-away").hasClass("active")) {
		$("#profile-img").addClass("away");
	} else if ($("#status-busy").hasClass("active")) {
		$("#profile-img").addClass("busy");
	} else if ($("#status-offline").hasClass("active")) {
		$("#profile-img").addClass("offline");
	} else {
		$("#profile-img").removeClass();
	};

	$("#status-options").removeClass("active");
});
function scrollChat()
{

	var messageWindow = $(".messages");
 	var scrollHeight = messageWindow.prop("scrollHeight");
	var scrollBottom = messageWindow.prop("scrollTop") + messageWindow.height();

	return scrollBottom;
};

function mychat() {
		var x = document.getElementById("frame");
		if (x.style.display === "none") {
			x.style.display = "block";
		} else {
			x.style.display = "none";
		}
		}

function CloseChat() {
		var x = document.getElementById("frame");

			x.style.display = "none";
		}
