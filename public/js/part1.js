var objectAlreadyUsed=new Array();
var correctAnswer=0;
var gameId=0;
var answered=0;
var objectId=0;
function clickedButton(id)
{
	console.log(id,correctAnswer);
	if(id==correctAnswer)
	{
		$("#status").hide();
		answered++;
		if(answered<30)
		{
			objectId=findNewId();
			updateDOM(objectId);	
		}
		else
		{
			spawnFinished();
		}
	}
	else
	{
		$("#status").show();
	}
}
function spawnFinished()
{
	$("#cuprins").hide();
	$("#gameContent").hide();
	$("#finishedGame").show();
}
function spawnCuprins()
{
	$("#cuprins").show();
	$("#gameContent").hide();
	$("#finishedGame").hide();
}
function findNewId()
{
	var randomId=Math.floor(Math.random()*29);	
	while(objectAlreadyUsed[randomId]!=0)
		randomId=Math.floor(Math.random()*29);
	objectAlreadyUsed[randomId]=1;
	return parseInt(randomId);
}
function updateDOM()
{
	var country=parseInt(objectId/5+1);
	var imgId=objectId%5+1;
	var source='public/asset/1/'+gameId+'/'+country+'/image'+imgId+'.jpeg';
	console.log(source);
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
	for(var i=0;i<100;i++)
		objectAlreadyUsed[i]=0;
	objectId=findNewId();

	updateDOM();
}
$(document).ready(function(){
	$("#cuprins button").click(
		function()
		{
			gameId=parseInt($(this).attr('id'))
			spawn(gameId);
		}
	);
});