// Dictionaries and Maps

function processData(input) {
    //Enter your code here
    input = input.split('\n');
    var N = parseInt(input[0]);
    var phoneBook = [];

    for (var k = 0; k< N; k++) {
        var line = input[k+1];
        line = line.split(' ');
        phoneBook[line[0]] = line[1];

    }

    for (var k = N+1; k < input.length; k++ ) {

        var num = (phoneBook[input[k]]);

        if (num !== undefined) {
            console.log(input[k]+'='+num);
        } else {
            console.log('Not found');
        }

    }
} 

