var objectAlreadyUsed=new Array();
var correctAnswer=0;
var gameId=0;
var answered=0;
var objectId=0;
var noQuestions=[0,
30,
35,
35,
35,
30,
30,
30,
30,
];
var countryNames=["Bulgaria","Italy","Romania","Spian","Poland","Sweden","Turkey"];
var points=0;
var pointToAdd=2;
function spawnModal()
{
	console.log(objectId);
	$("#myModal").modal('show');
	var source="public/flags/"+(parseInt(objectId/5)+1)+".jpeg";
	$("#flag").attr('src',source);
	$("#countryName").text('Congratulations! The question is from: '+countryNames[parseInt(objectId/5)]);
}
function clickedButton(id)
{
	if(id==correctAnswer)
	{
		$("#status").hide();
		answered++;
		points+=pointToAdd;
		if(pointToAdd==2)
			spawnModal(id);
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
function updatePoints()
{
	$("#points").text("You have "+points+"/"+noQuestions[gameId]*2+" points");
}
function spawnFinished()
{
	$("#cuprins").hide();
	$("#gameContent").hide();
	$("#finishedGame").show();
	$("#correctAnswer").hide();
}
function spawnCuprins()
{
	$("#cuprins").show();
	$("#gameContent").hide();
	$("#finishedGame").hide();
	$("#correctAnswer").hide();
	$("#goBack").hide();
}
function findNewId()
{
	var randomId=Math.floor(Math.random()*(noQuestions[gameId]-1));	
	while(objectAlreadyUsed[randomId]!=0)
		randomId=Math.floor(Math.random()*(noQuestions[gameId]-1));
	objectAlreadyUsed[randomId]=1;
	return parseInt(randomId);
}
function updateDOM()
{
	$("#correctAnswer").hide();
	pointToAdd=2;
	var country=parseInt(objectId/5+1);
	var imgId=objectId%5+1;
	var source='public/asset/1/'+gameId+'/'+country+'/image'+imgId+'.jpeg';
	$("#gameImg").attr('src',source);
	$("#slogan").text(slogan[gameId]);
	$("#question").text(question[gameId][objectId]);
	$("#btn0").text(varA[gameId][objectId]);
	$("#btn1").text(varB[gameId][objectId]);
	$("#btn2").text(varC[gameId][objectId]);
	$("#btn3").text(varD[gameId][objectId]);
	correctAnswer=answer[gameId][objectId];
}
function spawn()
{
	$("#cuprins").hide();
	$("#gameContent").show();
	$("#finishedGame").hide();
	$("#status").hide();
	$("#correctAnswer").hide();
	$("#goBack").show();
	points=0;
	answered=0;
	updatePoints();
	for(var i=0;i<100;i++)
		objectAlreadyUsed[i]=0;
	objectId=findNewId();

	updateDOM();
}
$(document).ready(function(){
	spawnCuprins();
	$("#cuprins button").click(
		function()
		{
			gameId=parseInt($(this).attr('id'))
			spawn(gameId);
		}
	);
});