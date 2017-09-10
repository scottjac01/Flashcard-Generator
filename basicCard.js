// require fs for writting to the logfile
var fs = require("fs");
var logFile = "log.txt";


// constructor for BasicFlashcard
function BasicCard(front, back) {
    this.front = front;
    this.back = back
}

BasicCard.prototype.create = function() {
    // flashcard object to be appended to file
    var data = {
        front: this.front,
        back: this.back,
        type: "basic",
    };
// add card to log.txt
 fs.appendFile(logFile, JSON.stringify(data) + ';', "utf8", function(error) {
     // if there is an error, log the error
         if (error) {
            console.log(error);
            }
        });
}

module.exports = BasicCard;