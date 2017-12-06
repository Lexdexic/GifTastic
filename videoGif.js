$(document).ready(function() 
{			
	// array of Game tiles
	var titles=["mario", "zelda", "contra"];

	// loop through array to add title buttons 
	for (let i = 0; i < titles.length; i++) 
	{
		$("#buttonArea").append('<button data-videoGame="Mario">' + titles[i] + '</button>');
	}
	

	$("button").on("click", function()
	{
		var videoGame = $(this).attr("data-game");

		var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + videoGame +"&api_key=aI3VdZRpgZO1m3IkFXRSVtkYphihsVAa";

	 	$.ajax(
		{
			url: queryURL,
			method: "GET"
		})
		.done(function(response)
		{
			console.log(queryURL);
			console.log(response);

			var results = response.data;
			for (var i = 0; i < results.length; i++) 
			{
				var gameImmageList = $("#gifArea");

				// TODO: add next 2 lines using JQ like with buttons
				// var p =$("p").text("Rating: " + results[i].rating);
				var listItem = '<li></li>';
				$(listItem).append('<img src="' + '[image URL from results]' + '"></img>');
				// var videoGameImmage = $("img");
				$(listItem).append('<p>' + '[Rating from results]' + '</p>')
				
				gameImmageList.append(listItem);
				// in CSS select all immages and apply height rules TODO 

			}
		});
	});
});
