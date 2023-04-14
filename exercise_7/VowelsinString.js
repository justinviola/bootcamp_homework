function getVowels(str) 
{
    var vowelsCount = 0;
  
    var string = str.toLowerCase()

    for (var i = 0; i <= string.length - 1; i++) {
  
      if (string.charAt(i) == "a" || string.charAt(i) == "e" || string.charAt(i) == "i" || string.charAt(i) == "o" || string.charAt(i) == "u") {
        vowelsCount += 1;
      }
    }
    console.log(`Return vowel to string ${vowelsCount}`)

  }

  getVowels('12356');