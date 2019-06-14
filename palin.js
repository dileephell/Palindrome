  module.exports = function palindromeCheck(input) {
    // special cases
    if (Number.isNaN(input)) return false;
  
    // validate input
    if (typeof input !== "string" && typeof input !== "number") return false;
  
    // algorithm
    let pattern = String(input).replace(/[^a-z0-9]/gi, "").toLowerCase();
    let length = pattern.length;
    let halfLength = Math.floor(length / 2);
    for (let i = 0; i < halfLength; i += 1) {
      if (pattern[i] !== pattern[length-i-1]) return false;
    }
    return true;
  }

