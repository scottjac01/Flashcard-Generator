// require fs for writting to the logfile
var fs = require("fs");
var logFile = "log.txt";


// constructor for ClozeFlashcard
function ClozeCard(text, cloze) {
    this.text = text;
    this.cloze = cloze;
    this.clozeDeleted = this.text.replace(this.cloze, '_____')
	}

//Prototype method that creates the cloze object
ClozeCard.prototype.create = function() {
        var dataCloze = {
            text: this.text,
            cloze: this.cloze,
            clozeDeleted: this.clozeDeleted,
            type: "cloze"
        }

// add the flashcard to log.txt
        fs.appendFile(logFile, JSON.stringify(dataCloze) + ';', "utf8", function(error) {
            // if there is an error, log the error
            if (error) {
                console.log(error);
            }
        });
    }

module.exports = ClozeCard;