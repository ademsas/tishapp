// Facebook
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.5";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

// Twitter
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');

// My code below

$(document).ready(function(){

	// work section
  for(var i = 0; i < works.length; ++i) {
  	$("#works").append("\
  		<div class='col-lg-3 col-md-3 col-xs-6'>\
  			 <img class='img-responsive' src='" + works[i] + "'>\
  		</div>\
			");

  	};
  for(var i = 0; i < works2.length; ++i) {
  	$("#works2").append("\
  		<div class='col-lg-3 col-md-3 col-xs-6'>\
  			 <img class='img-responsive' src='" + works2[i] + "'>\
  		</div>\
			");
  	var images = $("#works img");
		if(i%2 === 0){
			$(images[i]).css("border", "2px solid gray");
  	} else {
  		$(images[i]).css("border", "2px solid salmon");
  	};
  	var images2 = $("#works2 img");
  	if(i%2 === 0){
			$(images2[i]).css("border", "2px solid gray");
  	} else {
  		$(images2[i]).css("border", "2px solid salmon");
  	};
  };
	// Smooth scrolling
	var $root = $('html, body');
    $('.navbar-nav a').click(function() {
        var href = $.attr(this, 'href');
        $root.animate({
            scrollTop: $(href).offset().top
        }, 500, function () {
            window.location.hash = href;
        });
        return false;
    });

	// Stellar

	// Tooltips
	$(function () {
        $('#item1').tooltip();
      });
	$(function () {
        $('[data-toggle="tooltip"]').tooltip();
      });

	// Textarea background
	$("#message-box").css("background-color", "rgb(136,136,136)");
	$("#message-box").css("color", "white")
	
	//Submit Button
	$("#button-submit").on("click", function(){
		//work in here
		//rest of code will go in here
		console.log("clicked");

		// Message box
		var comment = $("#message-box").val();
		console.log("comment");
		if(comment === "") {
			$("#message-box").css("border", "2px solid red")
		} else {
			$("#visible-comment").html(comment);
			$("#message-box").hide("slow");
		};
		
		// Name box
		var name = $("#name-box").val();
		console.log("name");
		if(name === "") {
			$("#name-box").css("border", "2px solid red")
		} else {
			$("#visible-name").html(name);
			$("#name-box").hide("slow");
		};
		// Email box
		var email = $("#email-box").val();
		console.log("email");
		if(email === "") {
  		$("#email-box").css("border", "2px solid red")
  	} else {
  		$("#visible-email").html(email);
  		$("#email-box").hide();
  	};

  	

		return false;
		//no code here
});

		// Character count
		$("#message-box").on("keyup", function() {
			console.log("keyup happened");

			var charCount = $("#message-box").val().length;
			
			console.log(charCount);

			$("#char-count").html(charCount);

			if(charCount > 150) {
				$("#char-count").css("color", "red");
			} else {
				$("#char-count").css("color", "white");
			};

	});
});	

