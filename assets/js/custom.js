// Added by Desiboi

var helloWorldArray = [
    "😈 Hello World",
    "😍 नमस्ते दुनिया",
    "🤩 हॅलो वर्ल्ड",
    "🥰 ওহে বিশ্ব",
    "હેલો વર્લ્ડ",
    "ಹಲೋ ವರ್ಲ್ಡ್",
    "ഹലോ വേൾഡ്",
    "မင်္ဂလာပါကမ္ဘာလောက",
    "ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ ਦੁਨਿਆ",
    "هيلو ورلڊ",
    "ஹலோ வேர்ல்ட்",
    "హలో వరల్డ్",
    "ہیلو ورلڈ"
  ];
  
  let hwContainer = document.querySelector(".sayHelloWorld");
  let counter = 0;
  let interval = setInterval(showHelloWorld, 1000);
  
  function showHelloWorld() {
    hwContainer.innerHTML = helloWorldArray[counter];
    counter++;
    if (counter >= helloWorldArray.length) {
      counter = 0;
    }
  }
  

 
// year

var currentDate = new Date();
var year = currentDate.getFullYear();
//assigning new year in footer

document.querySelector('#currentYear').textContent = year;