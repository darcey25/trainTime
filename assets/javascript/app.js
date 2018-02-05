$(".submit").on("click", function(event) {
	event.preventDefault();
	var trainName = $("#name").val().trim();
	var trainDestination = $("#destination").val().trim();
	var trainTime = $("#time").val().trim();
	var trainFrequency = $("#frequency").val().trim();
	var newTrain = $("<tr>");
	newTrain.append("<td>"+trainName+"</td>");
	newTrain.append("<td>"+trainDestination+"</td>");
	newTrain.append("<td>"+trainFrequency+"</td>");
	newTrain.append("<td>Next Arrival</td>");
	newTrain.append("<td>"+trainTime+"</td>");
	$(".table").append(newTrain);
});

// psuedo code (didn't have time to learn firebase and moment.js, I will catch up ASAP)

// keep track of train times in database
// update when train will arrive - real time
