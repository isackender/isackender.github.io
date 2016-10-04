function inputWord(objform) {
    var word = objform.receivedword.value;
    var text;

    if(isPalindrome(word)){
        text ="<p><span class=\"italic\">"+word+"</span> <b>IS</b> a palindrome.</p>";
    } else {
        text ="<p><span class=\"italic\">"+word+"</span> <b>IS NOT</b> a palindrome.</p>";
    }

    if (countWords(word)==0){
        text += "<p><span class=\"italic\">"+word+"</span> does not have any words.";
    } else if (countWords(word)==1){
        text += "<p><span class=\"italic\">"+word+"</span> has "+countWords(word)+" word.";
    } else {
        text += "<p><span class=\"italic\">"+word+"</span> has "+countWords(word)+" word.";
    }

    document.getElementById("response").innerHTML = text;
}

function isPalindrome(sentence) {
    var formattedSentence = sentence.trim();                   // Formatting the sentence
    formattedSentence = formattedSentence.toLowerCase();
    formattedSentence = removeDiacritics(formattedSentence);
    formattedSentence = formattedSentence.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    formattedSentence = formattedSentence.replace(/\s+/g,"");
    var sentenceLength = formattedSentence.length;              // Calculate the length of the sentence (without blank spaces)
    var halft = Math.floor(sentenceLength/2);

    var correct;

    for (var i=0; i<half; i++) {
        var j = sentenceLength-1-i;
        var a = formattedSentence.charAt(i);                    // Save first and last char.
        var b = formattedSentence.charAt(j);

        if (a == b) {                                           // Compare them.
            correct = true;
        } else {
            correct = false;
            return correct;
        }
    };

    return correct;
}

function countWords(sentence){
    var numWords = 0;
    var formattedSentence = sentence.trim();                    // Formatting the sentence
    formattedSentence = formattedSentence.replace(/\s+/g," ");
    formattedSentence = formattedSentence.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    var sentenceLength = formattedSentence.length;

    if(formattedSentence!=" " && sentenceLength>0){             // If the sentence isn't " " and its length is grater than 0
        numWords++;                                             // There is 1 word at least.
        for (var i=0; i<sentenceLength; i++) {
            if(formattedSentence.charAt(i)==" "){               // For each blank space found,
                numWords++;                                     // increase the number of words.
            }
        };
    } else {
        return numWords;
    }
    return numWords;
}
