const fs = require('fs');
const readline = require('readline');
const stream = require('stream');
const checkPalindrome = require("./palin.js");

function readLines({ input }) {
  const output = new stream.PassThrough({ objectMode: true });
  const rl = readline.createInterface({ input });
  rl.on("line", line => { 
    output.write(line);
    //console.log(`Line from file: ${line}`);
  });
  // let count = 0;
    rl.on('line', (line) => {
      let words = line.split(/\s+/);
      let palindromeWords = {};
      words.forEach((word) => {
        const pTest = checkPalindrome(word);
        // console.log(word +", " + pTest);
        if(pTest){
          if(palindromeWords[word]) {
            palindromeWords[word]  = palindromeWords[word] + 1;
          } else {
            palindromeWords[word] = 1;
          }
        }
      });
      console.log(line + "|| "+JSON.stringify(palindromeWords));
    // console.log(count + ' ' + line);
    // count += 1;
  });

  rl.on("close", () => {
    output.push(null);
  }); 
  return output;
}
const input = fs.createReadStream("D:/Pro/Problem.txt");

(async () => {
  for await (const line of readLines({ input })) {
    //console.log(line);
  }
})();
module.exports = checkPalindrome;

