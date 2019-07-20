// getting the array of numbers 
var numbers = document.getElementsByClassName('number');

for (var i = 0; i< numbers.length ; i++) {

    // adding click listener to the numbers button
    numbers[i].addEventListener('click', function() {
        if (+getOutput() !==NaN) {
            document.getElementById('output-value').innerText = getOutput() + this.id;
        }
        
    });
}

// function to get the inner text of the output divison 
var getOutput = function() {
    return document.getElementById('output-value').innerText;
}

// function to get the inner text of the history divison 
var getHistory = function() {
    return document.getElementById('history-value').innerText;
}

var operators = document.getElementsByClassName('operator');

for (var j = 0; j< operators.length ; j++){
    operators[j].addEventListener('click', function() {
        if (this.id === 'clear') {
            printHistory('');
            printOutput('');
        } else  if (this.id === 'back' ) {
            printOutput(getOutput().substr(0,getOutput().length -1));
        } else {
            var output = getOutput();  
            var history = getHistory();

            // to get history without the last operator
            if (output === '' && history !== ''){
                if(isNaN(history[history.length-1])){
					history= history.substr(0,history.length-1);
                }
            } 
            if (output !=='' || history !== ''){
                history = history + output;

                // when operator is equals
                if (this.id === '=') {
                printOutput(eval(history));
                printHistory('');
                } else {
                    history += this.id;
                    printHistory(history);
                    printOutput('')
                }
            } 
        }
        // document.getElementById('history-value').innerText = getOutput() + this.id;
    });
}


function printHistory(val) {
    document.getElementById('history-value').innerText = val;
}

function printOutput(val) {
    document.getElementById('output-value').innerText = val;
}