function capitalizeFirstLetterEachWord(str) {
  return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

console.log(capitalizeFirstLetterEachWord("hello world"));