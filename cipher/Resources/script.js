//object array - stores the cipher

const cipher = [
    //vowels - lC
    {"english": "e", "cipher": "a"},
    {"english": "a", "cipher": "i"},
    {"english": "i", "cipher": "o"},
    {"english": "o", "cipher": "u"},
    {"english": "u", "cipher": "y"},
    {"english": "y", "cipher": "h"},
    {"english": "h", "cipher": "e"},    
    //vowels - UC
    {"english": "E", "cipher": "A"},
    {"english": "A", "cipher": "I"},
    {"english": "I", "cipher": "O"},
    {"english": "O", "cipher": "U"},
    {"english": "U", "cipher": "Y"},
    {"english": "Y", "cipher": "H"},
    {"english": "H", "cipher": "E"},
    //frequent consonants - LC
    {"english": "r", "cipher": "r"},
    {"english": "t", "cipher": "n"},
    {"english": "n", "cipher": "l"},
    {"english": "s", "cipher": "s"},
    {"english": "l", "cipher": "c"},
    {"english": "c", "cipher": "d"},
    {"english": "d", "cipher": "m"},
    {"english": "m", "cipher": "g"},
    {"english": "g", "cipher": "f"},    
    {"english": "f", "cipher": "b"},    
    {"english": "b", "cipher": "t"},    
    //frequent consonants - UC
    {"english": "R", "cipher": "R"},
    {"english": "T", "cipher": "N"},
    {"english": "N", "cipher": "L"},
    {"english": "S", "cipher": "S"},
    {"english": "L", "cipher": "C"},
    {"english": "C", "cipher": "D"},
    {"english": "D", "cipher": "M"},
    {"english": "M", "cipher": "G"},
    {"english": "G", "cipher": "F"},    
    {"english": "F", "cipher": "B"},    
    {"english": "B", "cipher": "T"},    
    //infrequent consonants - LC
    {"english": "k", "cipher": "w"},
    {"english": "w", "cipher": "v"},    
    {"english": "v", "cipher": "x"},
    {"english": "x", "cipher": "z"},
    {"english": "z", "cipher": "j"},
    {"english": "j", "cipher": "q"},
    {"english": "q", "cipher": "k"},
    //infrequent consonants - UC
    {"english": "K", "cipher": "W"},
    {"english": "W", "cipher": "V"},    
    {"english": "V", "cipher": "X"},
    {"english": "X", "cipher": "Z"},
    {"english": "Z", "cipher": "J"},
    {"english": "J", "cipher": "Q"},
    {"english": "Q", "cipher": "K"},
]

function runCipher(entryText) {
    entryText = document.getElementById("entryText").value.replace(/\n\r?/g, '\n') //grab the value of the input text
    let arrayPos = 0
    let resultText = ""
    let inCipher = []
        for (let i=-0; i < entryText.length; i++) { //for each letter in the input text        
            inCipher = cipher.filter(letter => letter.english.startsWith(entryText[i]))
            if (inCipher.length > 0) {
                arrayPos = cipher.indexOf(cipher.find(letter => letter.english.startsWith(entryText[i])));
                resultText = resultText.concat(cipher[arrayPos].cipher)
            }
            else {
                resultText = resultText.concat(entryText[i])
            }
        }
        console.log(resultText)
        document.getElementById("resultText").innerHTML = resultText //set the output paragraph to the result 
}

function runReverseCipher(entryText) {
    entryText = document.getElementById("reverseEntryText").value //grab the value of the input text
    let arrayPos = 0
    let resultText = ""
    let inCipher = []
        for (let i=-0; i < entryText.length; i++) { //for each letter in the input text        
            inCipher = cipher.filter(letter => letter.english.startsWith(entryText[i]))
            if (inCipher.length > 0) {
                arrayPos = cipher.indexOf(cipher.find(letter => letter.cipher.startsWith(entryText[i])));
                resultText = resultText.concat(cipher[arrayPos].english)
            }
            else {
                resultText = resultText.concat(entryText[i])
            }            
        }
    document.getElementById("reverseResultText").innerHTML = resultText //set the output paragraph to the result 
}
