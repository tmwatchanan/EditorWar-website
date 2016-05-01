var now = new Date();

function pageTimer()
{
	var objDiv = document.getElementById("timer");
	
	var then = new Date();
	objDiv.innerHTML = "หน้านี้ถูกสร้างขึ้นใช้เวลา " + ((then - now) / 1000) + " วินาที";
	objDiv.style.color = "grey";
}

window.onload=function()
{
	pageTimer();
}