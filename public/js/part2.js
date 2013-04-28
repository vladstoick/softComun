var gameId;
var videos=[0,10,10,10];
var countryName=["","Romania","Italy","Sweden"];
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
		'<video id="my_video_1" controls  preload="auto" width="520" height="264" poster="my_video_poster.png"  data-setup="{}">'  +
        '<source src="public/asset/2/'+name+'.mp4" type="video/mp4"></source>' +
        '<source src="public/asset/2/'+name+'.webm" type="video/webm">'+
        'You are using an old browser. Internet Explorer doesn\'t implement these functions. Use Chrome or Firefox'+
		'</video>')

	
	}
}
function showQuestions()
{

}
function spawn(gameId)
{
	$("#cuprins").hide();
	$("#menu").show();

}
function showMainMenu()
{
	$("#cuprins").show();
	$("#menu").hide();
}
$(document).ready(function(){

	$("#cuprins button").click(
		function()
		{
			gameId=parseInt($(this).attr('id'))
			spawn(gameId);
		}
	);
	showMainMenu();
});