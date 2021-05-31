//object array - stores the dictionary
let frenchDictionary = [
    {"french": "à", "english":"to, at", "tip":"'à' can mean both 'at' and 'to', depending on context."},
    {"french": "affirmé", "english":"maintained", "tip":"Literally 'affirmed'. A lot of words which end in '-ed' in English end in '-é' in French - try to spot these!"},
    {"french": "au", "english":"at", "tip":"'au' is a contraction of 'à le' - 'to the'. When these two words meet, they combine to make 'au'."},
    {"french": "avaient", "altfrench": "avait", "english":"had", "tip":"This comes from 'avoir' - to have. 'Avait' means 'he/she/it had' and 'avaient' means 'they had'. You'll spot these two a lot so make a mental note!"},
    {"french": "avec", "english":"with", "tip":"A very common word"},
    {"french": "belle", "altfrench": "bel", "english":"beautiful", "tip":"The masculine version is 'beau', and the feminine 'belle'. But before a vowel, 'beau' becomes 'bel'."},
    {"french": "c'était", "english":"it/he/she was", "tip":"This is contraction of 'ce était' - it was. You'll see this set phrase a lot, so make a mental note!"},
    {"french": "ce qui", "english":"which", "tip":"The set phrase 'ce qui' usually connects two sentences, WHICH is handy (see what I did there? ;)"},
    {"french": "chapitre", "english":"chapter", "tip":"This is an example of a cognate - words that look like English words. They're our greatest friends when learning deductively, so look out for them!"},
    {"french": "clôtures", "english":"fences", "tip":"A good way to remember: think of the word 'enclosures'"},
    {"french": "cou", "english":"neck", "tip":"A good way to remember this: you need your neck to make a 'coo' sound!"},
    {"french": "dans", "english":"in", "tip":"Another very frequent word"},
    {"french": "de", "altfrench":"d'", "english":"of, some", "tip":"'De' means 'of', but also crops up before nouns in a lot of different ways. Some of these we can ignore (they have no direct English translation), but some can mean 'some' or 'any'. Before a vowel, 'de' becomes d'..."},
    {"french": "des", "english":"of the, some", "tip": "This is a contraction of 'de les' - of the. When these two words meet, they become 'des'"},
    {"french": "du", "english":"of the, some", "tip": "This is a contraction of 'de le' - of the. When these two words meet, they become 'du'"},
    {"french": "deux", "english":"two", "tip":"Un, deux, trois..."},
    {"french": "dirigeait", "english":"managed", "tip": "This comes from 'diriger', to direct, or manage, e.g. a company"},
    {"french": "disposait", "english":"had", "tip": "'She disposed of...' is basically a fancy French way of saying 'she had'"},
    {"french": "école", "english":"school", "tip":"Fun fact: when English and French diverged from Old French, é frequently replaced the letter 's'. Hence we get école (éscole - school) or Écosse (Éscosse - Scotland)!"},
    {"french": "elle", "english":"she", "tip":"Like the magazine!"},
    {"french": "enfant", "english":"child", "tip":"A cognate of 'infant'"},
    {"french": "en regardant", "english":"by looking", "tip":"'Regarder' and its variants mean 'to look' (an English cognate would be 'regard'!). In French the special structure 'en + verb' means 'by ....ing'. So 'en regardant' means 'by looking'."},
    {"french": "en revanche", "english":"in contrast", "tip":"This literally means 'in return', but is used to indicate 'in contrast', 'on the other hand'"},
    {"french": "entreprise", "english":"company", "tip":"A cognate of 'enterprise'"},
    {"french": "espionner", "english":"to spy on", "tip":"A cognate of 'espionnnage'"},
    {"french": "et", "english":"and", "tip":"Tip: the 't' in 'et' is silent - it's pronounced 'ay'"},
    {"french": "était", "altfrench":"étaient", "english":"were", "tip":"This comes from être - to be. Était means 'he/she/it was', and 'étaient' means 'they were'. You'll see both a lot so make a mental note!"},
    {"french": "étrange", "english":"strange", "tip":"Another cognate, and another victim of the forgotten 's' (whose legacy we find in 'estranged'!"},
    {"french": "fabriquait", "english":"made, produced", "tip":"A cognate of 'fabricate'"},
    {"french": "fierté", "english":"pride", "tip":"A good way to remember this: imagine being 'fiercely' proud!"},
    {"french": "fois", "english":"times", "tip":"Usually used for counting a number of instances e.g. 'deux fois' - 'two times'"},
    {"french": "fort", "english":"strong, strongly", "tip":"A good way to remember: a fort is strong"},
    {"french": "garçon", "english":"boy", "tip":"You may also know this as the word for 'waiter'!"},
    {"french": "grand", "altfrench":"grande", "english":"big, large", "tip":""},
    {"french": "homme", "english":"man", "tip":"You'll often hear this in perfume adverts: 'pour femme' and 'pour homme' mean 'for women' and 'for men' respectively."},
    {"french": "habitaient", "english":"lived", "tip":"A form of 'habiter' - 'to live'. The ending -aient tells us that multiple people (the Dursleys) are doing this in the past. Don't worry too much about that now - you'll start to spot patterns!"},
    {"french": "ils", "altfrench":"elles", "english":"they", "tip":"'Ils' refers to a male group or a mixed group. 'Elles' refers to a female group. Remember that objects are gendered in French, so this can refer to a group of objects as well as people."},
    {"french": "imaginé", "english":"imagined", "tip":"Again note the '-é' ending that mirrors our '-ed' ending in English"},
    {"french": "impliqués", "english":"implicated", "tip":"Again note the '-é' ending that mirrors our '-ed' ending in English"},
    {"french": "jamais quiconque n'aurait", "english":"nobody would ever have", "tip":"Sometimes, you just encounter a mouthful! This literally means 'never anybody would have..."},
    {"french": "jardins", "english":"gardens", "tip":"Another lovely cognate"},
    {"french": "l'", "english":"the", "tip":"Before a vowel, 'le' (masculine) and 'la' (feminine) become l' and join the next word"},
    {"french": "la", "altfrench":"le", "english":"the", "tip":"'Le' is used before masculine words, and 'la' before feminine words."},
    {"french": "les", "english":"the", "tip":"'Les' is used before plural words."},
    {"french": "leurs", "english":"their", "tip":"'Leur' is used before a singular item, and 'leurs' before a plural item."},
    {"french": "lui", "english":"to her, for her", "tip":"This little word comes before the verb in French, so 'lui était utile' literally means 'for her was useful' - it was useful for her."},
    {"french": "mais", "english":"but", "tip":"Another very common word"},
    {"french": "massif", "english":"massive, enormous", "tip":"Another cognate"},
    {"french": "merci pour eux", "english":"thank you very much", "tip":"A set phrase literally meaning 'thank you for them' - or more idiomatically, 'thank you very much'"},
    {"french": "mince", "english":"thin, slim", "tip":"A way to remember: minced meat is usually kinda slim?"},
    {"french": "monde", "english":"world", "tip":""},
    {"french": "moyenne", "english":"average, normal", "tip":"Literally means 'medium'"},
    {"french": "mystérieux", "english":"mysterious", "tip":"Another cognate"},
    {"french": "ne", "altfrench":"n'", "english":"not, didn't", "tip":"'Ne ... pas' means 'not, didn't'. It goes around the verb like a sandwich. When the verb starts with a vowel, 'ne' becomes n'..."},
    {"french": "normaux", "english":"normal", "tip":"This is the plural form of 'normal'. Most French words indicate a plural with -s like we do in English. There are a few exceptions, often ending in -x."},
    {"french": "ou", "english":"or", "tip":"Another very common word"},
    {"french": "par-dessus", "english":"over", "tip":"The opposite, 'par-dessous', means 'under' - what a difference an 'o' makes!"},
    {"french": "parfaitement", "english":"perfectly", "tip":"Words which end in -ly in English (such as perfectly) often end in -ment in French - so look out for this pattern"},
    {"french": "pas", "english":"not, didn't", "tip":"'Ne ... pas' means 'not, didn't'. It goes around the verb like a sandwich."},
    {"french": "perceuses", "drills":"lose", "tip":"A good way to remember this: drills make a 'piercing' (perc-ing) noise!"},
    {"french": "perdre", "english":"lose", "tip":""},
    {"french": "petit", "english":"little", "tip":"'Petit' precedes a masculine noun (or person, such as Dudley) and 'petite' a feminine noun or person."},
    {"french": "plus grande", "english":"highest", "tip":"Literally, 'most big'"},
    {"french": "plus", "english":"more, most", "tip":"'Plus' can mean either more or most - e.g. 'c'est plus grand' - 'it's more big' -> 'it's bigger'. But 'c'est le plus grand' - 'it's THE most big' -> 'it's the biggest'"},
    {"french": "possédait", "english":"possessed", "tip":"Another cognate"},
    {"french": "pour", "english":"for", "tip":"Another very common word"},
    {"french": "pratiquement", "english":"practically", "tip":"Notice again the '-ment' ending where the English ends '-ly'"},
    {"french": "prénommé", "english":"named", "tip":"This literally means 'prenamed' - similarly to the English word 'forename'"},
    {"french": "puissent", "english":"could", "tip":"This comes from pouvoir - can / to be able to. Just note at this point that all the various forms of 'can' in French start with p-"},
    {"french": "quant à", "as for":"possessed", "tip":"This is a set phrase meaning 'as for...' - e.g. 'quant à moi...' - 'as for me...'"},
    {"french": "qui", "english":"who, which", "tip":"'Qui' can mean who or which, depending on the context"},
    {"french": "que", "altfrench":"qu'", "english":"that", "tip":"Before a vowel, 'que' becomes qu'..."},
    {"french": "quoi que ce soit", "english":"anything", "tip":"Another mouthful. This phrase literally means 'anything that may be'"},
    {"french": "se", "english":"hisself, herself, themselves", "tip":"'Se' comes before a verb - so in English where we say 'find oneself', the French would say 'se trouver' - 'oneself find'"},
    {"french": "ses", "english":"his, her", "tip":"A word indicating something belongs to someone - e.g. 'ses livres' - 'his books, her books'. 'Ses' indicates the thing they own is plural - you might also see 'son' and 'sa' referring to singular items, but essentially they all mean 'his, her'"},
    {"french": "sorciers", "english":"wizards", "tip":"A cognate of 'sorcerors'"},
    {"french": "sornettes", "english":"twaddle", "tip":"This has an old-fashioned sense - twaddle, poppycock, balderdash and such"},
    {"french": "survivant", "english":"survivor", "tip":"Another cognate!"},
    {"french": "taille", "english":"size", "tip":"A good way to remember this - a tailor in French is a 'tailleur' - literally, a sizer!"},
    {"french": "temps", "english":"time", "tip":""},
    {"french": "toujours", "english":"always", "tip":"This comes from 'tous les jours' - literally 'all the days', every day"},
    {"french": "trouver", "english":"find", "tip":""},
    {"french": "un", "altfrench":"une", "english":"a", "tip":"'un' comes before masculine words, and 'une' before feminine words"},
    {"french": "utile", "english":"useful", "tip":"A good way to remember this: think of the word 'utilise'"},
    {"french": "voisins", "english":"neighbours", "tip":"𝆕Voisins... everybody needs good voisins...𝆕"},
    {"french": "yeux", "english":"eyes", "tip":"Fun fact - the singular of 'eye' is 'oeil' and the plural is 'yeux'. Don't worry, this is one of the crazier exceptions in French!"},
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
        else if (frenchDictionary[checkIndex].altfrench === wordToTranslate) { //if the word is found
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
        let xposition = (Math.floor(spanInfo.left)) - ((220 - document.getElementsByTagName('span')[spanIndex].offsetWidth)/2)
        let yposition = (Math.floor(spanInfo.top) + window.scrollY + document.getElementsByTagName('span')[spanIndex].offsetHeight);
        // set the CSS position of the popup paragraph accordingly
        document.getElementById("popup").style.left = `${xposition}px`
        document.getElementById("popup").style.top = `${yposition}px`
    }
}