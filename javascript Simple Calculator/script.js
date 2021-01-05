function getHistory(){
	return document.getElementById("history-value").innerText;
}

//printing history value

function printHistory(num){
	document.getElementById("history-value").innerText = num;
}


// for output section

function getOutput(){
	return document.getElementById("output-value").innerText;
}

function printOutput(num){
	if(num == ""){
		document.getElementById("output-value").innerText = num;
	}else{
		document.getElementById("output-value").innerText = getFormattedNumber(num);
	}
	
}

//macking numbers coma saparated
function getFormattedNumber(num){
	var n = Number(num);
	var value = n.toLocaleString("en");
	return value;
}

//removing coma's

function reverseNumberFormat(num){
	return Number(num.replace(/,/g,''));
}

//getting clicked operators on the screen

var operator = document.getElementsByClassName("operator");

for(var i =0; i < operator.length; i++){
	operator[i].addEventListener("click", function(){
		// alert("user has clicked on " + this.id);
		 
		//clear button logic 
		//if user clicks on "clear" button nothing should be displayed on the display

		if(this.id == "clear"){
			printOutput("");
			printHistory("");
		}

		//developing "backspace" dunctionality
		else if(this.id =="backspace"){
			var output = reverseNumberFormat(getOutput()).toString();
			if(output){ //if output has a value
				output = output.substr(0,output.length-1);
				printOutput(output);
			}
		}
		else{
			var output=getOutput();
			var history=getHistory();

			if(output==""&&history!=""){
				if(isNaN(history[history.length-1])){
					history= history.substr(0,history.length-1);
				}
			}

			if(output!="" || history!=""){

				output= output==""?output:reverseNumberFormat(output);
				history=history+output;

				if(this.id=="="){
					var result=eval(history);
					printOutput(result);
					printHistory("");
				}

				else{
					history=history+this.id;
					printHistory(history);
					printOutput("");
				}
			}
		}
		
	});
}

//doing same for numbers

var number = document.getElementsByClassName("number");

for(var i =0; i < number.length; i++){
	number[i].addEventListener("click", function(){
		
		// alert("user has clicked on " + this.id);

		//concatinating each user typed number
		var output = reverseNumberFormat(getOutput());

		if(output != NaN){
			//if output is a number
			output = output + this.id;
			printOutput(output);
		}
	}); 
}
