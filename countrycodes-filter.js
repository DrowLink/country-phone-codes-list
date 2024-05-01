//extract url image from exact match country code list
function getFlagURL(countryCode) {
    countryCode = String(countryCode);
  
    const flagData = require('data/codelist.json');


    if (flagData[countryCode]) {

      return flagData[countryCode];
    } else {

      return "Country code not valid";
    }
  }
  

  //executing func
  const countryCode = 81; // Country code
  const flagURL = getFlagURL(countryCode);
  console.log(`${countryCode}: ${flagURL}`);
  