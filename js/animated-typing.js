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
	
	$("#about-us-typed").typed({
		strings: ["Abort ", "About Ums ", "About Us "],
		typeSpeed: 30,
		backSpeed: 30,
		loop: true,
		backDelay: 1500,
		contentType: 'html',
		
		callback: function(){ foo(); },
		resetCallback: function() { newTyped(); }
	});
	$(".about-us-reset").click(function(){
		$("#about-us-typed").typed('about-us-reset');
	});
	
	$("#statistic-typed").typed({
		strings: ["Statususus ", "Statistical ", "Statistic "],
		typeSpeed: 30,
		backSpeed: 30,
		loop: true,
		backDelay: 1500,
		contentType: 'html',
		
		callback: function(){ foo(); },
		resetCallback: function() { newTyped(); }
	});
	$(".statistic-reset").click(function(){
		$("#statistic-typed").typed('statistic-reset');
	});
	
	$("#tutorial-typed").typed({
		strings: ["Tutoreeii ", "Tutoreal ", "Tutorial "],
		typeSpeed: 30,
		backSpeed: 30,
		loop: true,
		backDelay: 1500,
		contentType: 'html',
		
		callback: function(){ foo(); },
		resetCallback: function() { newTyped(); }
	});
	$(".tutorial-reset").click(function(){
		$("#tutorial-typed").typed('tutorial-reset');
	});
	
	$("#vim-history-typed").typed({
		strings: ["Vim Hehim ", "Vim Histally ", "Vim History "],
		typeSpeed: 30,
		backSpeed: 30,
		loop: true,
		backDelay: 1500,
		contentType: 'html',
		
		callback: function(){ foo(); },
		resetCallback: function() { newTyped(); }
	});
	$(".vim-history-reset").click(function(){
		$("#vim-history-typed").typed('vim-history-reset');
	});
	
	$("#emacs-history-typed").typed({
		strings: ["Emacs Hehim ", "Emacs Histally ", "Emacs History "],
		typeSpeed: 30,
		backSpeed: 30,
		loop: true,
		backDelay: 1500,
		contentType: 'html',
		
		callback: function(){ foo(); },
		resetCallback: function() { newTyped(); }
	});
	$(".emacs-history-reset").click(function(){
		$("#emacs-history-typed").typed('emacs-history-reset');
	});
	
	$("#vim-information-typed").typed({
		strings: ["Vim Informatings ", "Vim Informasion ", "Vim Information "],
		typeSpeed: 30,
		backSpeed: 30,
		loop: true,
		backDelay: 1500,
		contentType: 'html',
		
		callback: function(){ foo(); },
		resetCallback: function() { newTyped(); }
	});
	$(".vim-information-reset").click(function(){
		$("#vim-information-typed").typed('vim-information-reset');
	});
	
	$("#emacs-information-typed").typed({
		strings: ["Emacs Informatings ", "Emacs Informasion ", "Emacs Information "],
		typeSpeed: 30,
		backSpeed: 30,
		loop: true,
		backDelay: 1500,
		contentType: 'html',
		
		callback: function(){ foo(); },
		resetCallback: function() { newTyped(); }
	});
	$(".emacs-information-reset").click(function(){
		$("#emacs-information-typed").typed('emacs-information-reset');
	});

});

function newTyped(){ /* A new typed object */ }

function foo(){ console.log("Callback"); }