const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// const titleCased = () => {
//   const words = tutorials.split(" ")
//   words.map((word) => { 
//     return word.charAt(0).toUpperCase() + word.substring(1); 
//   }).join(" ");
//   return tutorials
// }

// function titleCased() {
//   let word = word.toLowerCase().split(' ').map(function(word) {
//     return (word.charAt(0).toUpperCase() + word.slice(1));
//   }).join(' ');
//   return word
// }

// const titleCased = function() {
//   return tutorials.map((element) => {
//     return element.split(' ').map((word) => {
//       return (word.charAt(0).toUpperCase() + word.slice(1));
//     }).join(' ');
//   });
// }
// console.log(titleCased(tutorials))


const titleCased = function() {
  return tutorials.map((element) => {
    return element.split(' ').map((word) => {
      return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
  });
}
console.log(titleCased(tutorials))