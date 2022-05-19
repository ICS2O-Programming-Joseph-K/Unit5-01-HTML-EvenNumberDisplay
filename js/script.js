"use strict"

// This function displays all numbers from user starting number to the user ending number
function enterClicked () {
  // get the user starting number 
	let counter = parseInt(document.getElementById('number').value)
  // initialize numbers as an empty string 
  let numbers = ""
  // get the user ending number 
  let userNum = parseInt(document.getElementById('number1').value)


  // use a while loop to display the numbers from user starting number up to the user ending number 
  while (counter <= userNum) {
    // build the string of numbers with a line break each time 
    numbers = numbers + counter + "<br>"
    // increment the counter
    counter = counter + 1
  }

	
  // display the results
  document.getElementById('display-results').innerHTML = numbers                                                                                                                                                                               
}
