//object array - stores the dictionary
let frenchDictionary = [
    {"french": "à", "english":"to, at", "tip":"'à' can mean both 'at' and 'to', depending on context."},
    {"french": "l'", "english":"the", "tip":"Before a vowel, 'le' (masculine) and 'la' (feminine) become l' and join the next word"},
    {"french": "école", "english":"school", "tip":""},
    {"french": "des", "english":"of the", "tip": "'Des' is a contraction of 'de les' - literally 'of the'. When these two words meet in French, they combine into 'des'."},
    {"french": "sorciers", "english":"wizards", "tip":"A good way to remember this: sorcerors"},
    {"french": "chapitre", "english":"chapter", "tip":"Words that look like words we already know are called 'cognates' and are our best friends!"},
    {"french": "le", "english":"the", "tip":"'le' is used before masculine words. Its counterpart, 'la', is used before feminine words."},
    {"french": "survivant", "english":"survivor", "tip":"Another cognate!"},
    {"french": "et", "english":"and", "tip":"The 't' in 'et' is silent - it's pronounced 'ay'"},
    {"french": "qui", "english":"who", "tip":""},
    {"french": "habitaient", "english":"lived", "tip":"This comes from 'habiter' which means 'to live'. French verbs contain information about who is doing the action and when. In this case, multiple people (the Dursleys) were doing this action (living) in the past. Most books are in the past tense, so a lot of the verbs we'll meet are in the past tense. Don't worry about that for now - just try to recognise the stems: in this case, 'habit-' - live"},
    {"french": "au", "english":"at", "tip":"'au' is a contraction of 'à le' - 'to the'. When these two words meet, they combine to make 'au'."},
    {"french": "avaient", "english":"had", "tip":"This comes from 'avoir' - to have. Again, we're looking at a past tense."},
    {"french": "toujours", "english":"always", "tip":"This comes from 'tous les jours' - everyday."},
    {"french": "affirmé", "english":"maintained", "tip":"Or literally, 'affirmed'. A lot of words which end in '-ed' in English end in '-é' in French, so you can often guess this is a past tense."},
    {"french": "avec", "english":"with", "tip":""},
    {"french": "la", "english":"the", "tip":"'la' is used before feminine words. Its counterpart, 'le', is used before masculine words."},
    {"french": "plus grande", "english":"highest", "tip":"Literally, 'most big'"},
    {"french": "fierté", "english":"pride", "tip":"A good way to remember this: imagine being 'fiercely' proud!"},
    {"french": "qu'ils", "english":"that they", "tip":"This is contraction of 'que ils' - literally 'that they'. When these two words meet, they combine to 'qu'ils'."},
    {"french": "étaient", "english":"were", "tip":"This comes from être - to be. Étaient means 'were' and était means 'was'. You'll see both a lot and soon recognise them!"},
    {"french": "parfaitement", "english":"perfectly", "tip":"In English we often add -ly to make an adverb - a word describing how we did something (perfectly!) In French, -ment usually does the same thing, so many -ment words you spot will be adverbs (-ly words)"},
    {"french": "normaux", "english":"normal", "tip":"This is the plural form of 'normal' - the French for, yep, you've guessed it, normal! Most French words indicate a plural with -s like we do in English. There are a few exceptions, but many of these end in x. Just think: weird word ending in X? Plural!"},
    {"french": "merci pour eux", "english":"thank you very much", "tip":"This is a phrase literally meaning 'thank you for them' - but translates familiarly to English as 'thank you very much!'"},
    {"french": "jamais quiconque n'aurait", "english":"nobody would ever have", "tip":"Wow, a mouthful! This literally means 'never anybody would have..."},
    {"french": "imaginé", "english":"imagined", "tip":"A"},
    {"french": "puissent", "english":"could", "tip":"This comes from pouvoir - can / to be able to. Just note at this point that all the various forms of 'can' in French start with p."},
    {"french": "se trouver", "english":"find themselves", "tip":"'se' is a little word meaning 'hisself/herself/themselves'. You'll often spot it before a verb - in this case this literally means 'themselves find'"},
    {"french": "impliqués", "english":"implicated", "tip":"Notice again that where we find -ed in English, we find -é in French!"},
    {"french": "dans", "english":"in", "tip":"A very frequent word, remember this one!"},
    {"french": "quoi que ce soit", "english":"anything", "tip":"Another mouthful. This phrase literally means 'anything that may be'"},
    {"french": "d'étrange", "english":"strange", "tip":"Another cognate!"},
    {"french": "ou", "english":"or", "tip":"Another frequent flyer"},
    {"french": "de mystérieux", "english":"mysterious", "tip":"What's that 'de' about, you say? In French, 'de' means of. But it's used in some places we don't always use 'of' in English. In this case, the Dursleys aren't involved in anything 'of strange' or 'of mysterious'."},
    {"french": "ils", "english":"they", "tip":"You'll see this one a lot"},
    {"french": "n'avaient pas", "english":"didn't have", "tip":"we already saw 'avaient', meaning 'had'. 'Ne ... pas' means 'not, didn't' in French and goes around the verb like a sandwich, turning 'had' into 'didn't have'."},
    {"french": "de temps", "english":"any time", "tip":"'temps' is time - and there's that 'de' again, hanging around doing nothing particularly important to us."},
    {"french": "perdre", "english":"to lose", "tip":""},
    {"french": "des sornettes", "english":"nonsense", "tip":"You know, larks and japes, and all that"},
]

//whenever a defined <span> is hovered over it should invoke translateWord() and pass it the word/phrase being hovered over
//get all the <span> elements in an array
let spanArray = document.getElementsByTagName('span');
//for loop - takes each span element and adds a mouseover event to it which invokes translateWord and passes it the contents of the <span>
for(let i=0; i<spanArray.length;i++) {
    spanArray[i].addEventListener('mouseover', function() {translateWord(spanArray[i].innerHTML,i)});
    spanArray[i].addEventListener('mouseout', function() {mouseOffTranslate()});
}

//function to hide the popup again on mouseoff
function mouseOffTranslate() {
    document.getElementById("popup").style.visibility="hidden";
}

//main translate function invoked when a word is hovered over
function translateWord(word,spanIndex) {
    let wordToTranslate = word.toLowerCase(); //works in lower case
    let tip = "" //variable to store the tip
    let translation = "" //variable to store the translation once we find it
    let found = false //variable to track when the requested translation has been found within the array
    let checkIndex = 0 //check index to keep track of the array loop 
    do {    
        if (frenchDictionary[checkIndex].french === wordToTranslate) { //if the word is found
            found = true //set found to true
            translation = frenchDictionary[checkIndex].english //and store the english translation in variable translation
            tip = frenchDictionary[checkIndex].tip //and store the tip too
        }
        else {
            checkIndex ++ //if it wasn't found, increase checkIndex by 1 and keep looking 
        }
    }
    while (found === false && checkIndex < frenchDictionary.length) ; //end loop when it's found or when reaches end of array
    if (found === false) {
        alert("Sorry, no translation found") //test contingency for translation not being found - remove later
    }
    else {
        //if it was found...
        //fill text of popup with translation (as a H3) and tip (as plain text)
        document.getElementById("popup").innerHTML = "<h3>" + translation + "</h3>" + tip
        //make popup visible
        document.getElementById("popup").style.visibility="visible"
        //get the positional info of the span element (word) on which the user is hovering
        spanInfo = document.getElementsByTagName('span')[spanIndex].getBoundingClientRect()
        //specifically get the horizontal and vertical position of the span element
        //plus some maths to work out position needed to place the popup just under the hovered word vertically, and centred beneath it horizontally
        let xposition = (Math.floor(spanInfo.left)) - ((200 - document.getElementsByTagName('span')[spanIndex].offsetWidth)/2)
        let yposition = (Math.floor(spanInfo.top) + document.getElementsByTagName('span')[spanIndex].offsetHeight)
        // set the CSS position of the popup paragraph accordingly
        document.getElementById("popup").style.left = `${xposition}px`
        document.getElementById("popup").style.top = `${yposition}px`
    }
}