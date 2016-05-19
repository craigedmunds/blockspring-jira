//****** Welcome to Blockspring!
//****** To help you get started, below is a fully-commented sample function that prints out a simple welcome message.

// require the blockspring package.
var blockspring = require('blockspring');

// pass your function into blockspring.define. tells blockspring what function to run.
blockspring.define(function(request, response) {
    
    // retrieve input parameters and assign to variables for convenience.
    // var first_name = request.params["first_name"];
    // var age = request.params["age"];
    
    // build our welcome message.
    // var welcome = "Hi! My name is " + first_name + " and my age is " + age;
	
    // add the message to the function's output.
	// response.addOutput('intro', welcome);
    response.addOutput("values", [{key : "WEB-7865"}]);
    
    // return the output.
	response.end();
});