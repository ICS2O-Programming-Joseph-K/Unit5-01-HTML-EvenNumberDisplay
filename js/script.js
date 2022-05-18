"use strict"

// Calculate what museum admission fee you will need to pay depending on day and age
function enterClicked () {
  	// initialize variables
	let counter = parseInt(document.getElementById('number').value)

  let numbers = ""

  let userNum = parseInt(document.getElementById('number1').value)



  while (counter <= userNum) {
    numbers = numbers + counter + "<br>"

    counter = counter + 1
  }

	
  // display the results
  document.getElementById('display-results').innerHTML = numbers                                                                                                                                                                               
}
