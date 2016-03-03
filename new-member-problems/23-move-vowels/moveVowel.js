function moveVowel(string) {
    var arrayWithoutVowels = [];
    var arrayWithVowels = [];
    for (var i = 0; i < string.length; i++) {
        var c = string[i];
        if ("aeiou".indexOf(c) < 0) {
            arrayWithoutVowels.push(c);
        } else {
            arrayWithVowels.push(c);
        }
    }
    
    return arrayWithoutVowels.join("") + arrayWithVowels.join("");
}