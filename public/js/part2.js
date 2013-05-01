var gameId;
var points=0;
var videos=[0,10,10,10];
var noQuestions = [ 0 , 18,  3, 10];
var        suma = [ 0 , 20, 23, 33];
var countryName=["","Romania","Italy","Sweden"];
var flag       =[0,3,2,6];
var zone=0;
var objectAlreadyUsed=new Array(100);
var answered=0;
function showModal()
{
	$("#myModal").modal('show');
	$("#countryName").text(countryName[gameId]);
	$("#videoContainer").empty();
	// for(var i=1;i<=videos[gameId];i++)
	for(var i=1;i<=10;i++)
	{
		var name = '/'+gameId+'/'+i;
		$("#videoContainer").append(
		'<video id="my_video_1" controls  preload="auto" width="520" height="264"  data-setup="{}">'  +
        '<source src="public/asset/2/'+name+'.mp4" type="video/mp4"></source>' +
        '<source src="public/asset/2/'+name+'.webm" type="video/webm">'+
        'You are using an old browser. Internet Explorer doesn\'t implement these functions. Use Chrome or Firefox.'+
		'</video>')

	
	}
}
function clickedButton(id)
{
	if(id==correctAnswer)
	{
		$("#status").hide();
		answered++;
		points+=pointToAdd;
		if(answered<noQuestions[gameId])
		{
			objectId=findNewId();
			updateDOM(objectId);	
		}
		else
		{
			spawnFinished();
		}
		updatePoints();
	}
	else
	{
		pointToAdd=0;
		$("#status").show();
		var stringcorrectAnswer='a';
		if(correctAnswer==2)
			stringcorrectAnswer='b';
		if(correctAnswer==3)
			stringcorrectAnswer='c';
		if(correctAnswer==4)
			stringcorrectAnswer='d';
		$("#correctAnswer").text("The correct answer was: "+stringcorrectAnswer+"). Click on the correct answer to continue.").show();
	}
}
function spawnFinished()
{
	$("#cuprins").hide();
	$("#gameContent").hide();
	$("#finishedGame").show();
	$("#correctAnswer").hide();
}
function updatePoints()
{
	$("#points").text("You have "+points+"/"+noQuestions[gameId]*2+" points");
}
function findNewId()
{
	var randomId=Math.floor(Math.random()*(noQuestions[gameId]));	
	while(objectAlreadyUsed[randomId]!=0)
		randomId=Math.floor(Math.random()*(noQuestions[gameId]));
	objectAlreadyUsed[randomId]=1;
	console.log(suma[gameId]);
	return parseInt(randomId)+suma[gameId-1];
}
function showQuestions()
{
	$("#cuprins").hide();
	$("#gameContent").show();
	$("#finishedGame").hide();
	$("#status").hide();
	$("#correctAnswer").hide();
	$("#menu").hide();
	points=0;
	answered=0;
	updatePoints();
	for(var i=0;i<100;i++)
		objectAlreadyUsed[i]=0;
	objectId=findNewId();
	updateDOM();

}
function updateDOM()
{
	$("#correctAnswer").hide();
	pointToAdd=2;
	$("#slogan").text(slogan);
	$("#question").text(question[objectId]);
	$("#btn0").text(varA[objectId]);
	$("#btn1").text(varB[objectId]);
	$("#btn2").text(varC[objectId]);
	$("#btn3").text(varD[objectId]);
	correctAnswer=answer[objectId];
}
function spawn(gameId)
{
	$("#cuprins").hide();
	$("#menu").show();
	$("#goBack").show();
	var source = "public/flags/"+flag[gameId]+'.jpeg';
	$("#gameImg").attr('src',source);
	zone=1;
}
function showMainMenu()
{
	$("#cuprins").show();
	$("#menu").hide();
	$("#finishedGame").hide();
	$("#gameContent").hide();
	$("#goBack").hide();
	zone=0;
}
$(document).ready(function(){
	showMainMenu();
	$("#cuprins button").click(
		function()
		{
			gameId=parseInt($(this).attr('id'))
			spawn(gameId);
		}
	);
	showMainMenu();
});
function goBack()
{
	if(zone==2)
		spawn(gameId);
	else
		showMainMenu();
}