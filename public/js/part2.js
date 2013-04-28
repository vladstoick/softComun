var gameId;
var videos=[0,10,10,10];
var countryName=["","Romania","Italy","Sweden"];
function showModal()
{
	$("#myModal").modal('show');
	$("#countryName").text(countryName[gameId]);
	$("#videoContainer").empty();
	for(var i=1;i<=videos[gameId];i++)
	{
		var name = '/'+gameId+'/'+i;
		$("#videoContainer").append(
   		 '<video width="520" height="264" controls>' +
        '<source src="public/asset/2/'+name+'.mp4" type="video/mp4"></source>' +
        '<object data="public/asset/2/'+name+'.mp4" width="320" height="240">'+
    	'<embed src="public/asset/2/'+name+'.swf" width="320" height="240">'+
  		'</object>'+
   		 '</video>');
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