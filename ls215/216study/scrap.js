function compareVersions(version1, version2) {

  // if (version1.match(/[^0-9.]/gi) || version2.match(/[^0-9.]/gi)) return false; 
  
  if (!/^(\d+\.)*\d+$/gi.test(version1) || !/^(\d+\.)*\d+$/gi.test(version2)) return false; 

  let digits1 = version1.match(/\b\d+\b/gi);
  let digits2 = version2.match(/\b\d+\b/gi);

  // console.log(digits1);
  // console.log(digits2)

  let maxLength = Math.max(digits1.length, digits2.length);

  for (let i = 0; i < maxLength; i+=1) {
    let digit1 = digits1[i] || 0;
    let digit2 = digits2[i] || 0;

    if (digit1 > digit2) return 1; 
    if (digit2 > digit1) return -1;
  }

  return 0; 
}

console.log(compareVersions('1', '1'));            // 0
console.log(compareVersions('1.1', '1.0'));        // 1
console.log(compareVersions('2.3.4', '2.3.5'));    // -1
console.log(compareVersions('1.a', '1'));          // null
console.log(compareVersions('.1', '1'));           // null
console.log(compareVersions('1.', '2'));           // null
console.log(compareVersions('1..0', '2.0'));       // null
console.log(compareVersions('1.0', '1.0.0'));      // 0
console.log(compareVersions('1.0.0', '1.1'));      // -1
console.log(compareVersions('1.0', '1.0.5'));      // -1 (this doesn't work yet)


/*
/^(\d+\.)*\d+$/gi

*/