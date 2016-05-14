$(function(){

	$("#typed").typed({
		strings: ["Editor War ", "Emacs vs Vim ", "Vim vs Emacs "],
		typeSpeed: 60,
		backSpeed: 60,
		loop: true,
		backDelay: 2500,
		contentType: 'html',
		
		callback: function(){ foo(); },
		resetCallback: function() { newTyped(); }
	});

	$(".reset").click(function(){
		$("#typed").typed('reset');
	});

});

function newTyped(){ /* A new typed object */ }

function foo(){ console.log("Callback"); }