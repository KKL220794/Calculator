var numbers = document.getElementsByClassName('number');

for (var i = 0; i< numbers.length ; i++) {
    numbers[i].addEventListener('click', function() {
        if (+getOutput() !==NaN) {
            document.getElementById('output-value').innerText = getOutput() + this.id;
        }
        
    });
}

var getOutput = function() {
    return document.getElementById('output-value').innerText;
}

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
            if(output !== '' && history === '') {
                printHistory(output + this.id);
                printOutput('');
            } else if (output === '' && history !== ''){
                printHistory(history.substr(0,history.length -1) + this.id);
            } else if (output !=='' && history !== ''){
                if (this.id === '=') {
                printOutput(eval(output));
                printHistory('');
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