class StrangerStrings {

    getHelloWorld(){
        return "Hello World";
    }

    concatenation(firstSegment, secondSegment){
        return firstSegment + secondSegment;
    }

    getPrefix(input){
        let subString = input.substring(0, 3);
        return subString;
    }

    getSuffix(input){
        let subString = input.substring(input.length - 3)
        return subString;
    }

    getMiddleCharacter(input){
        let index;
        let length = 1;
        if(input.length % 2 == 0) {
            index = input.length / 2;
        } else {
            index = Math.round((input.length / 2));
        }

        return input.substring(index, index - length)
    }

    getFirstWord(input){
        let firstWord = input.substring(0, input.indexOf(" "))
        return firstWord;
    }
    
    getSecondWord(spaceDelimnatedInput){
        let secondWord = spaceDelimnatedInput.substring(spaceDelimnatedInput.indexOf(" ") + 1, spaceDelimnatedInput.length);
        return secondWord;
    }
    
    reverse(input){
        let splitInput = input.split("");
        let reverseInput = splitInput.reverse();
        let backwards = reverseInput.join("");
        return backwards;
    }
}

module.exports = StrangerStrings;