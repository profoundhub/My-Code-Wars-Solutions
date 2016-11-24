let isIsogram = (str) => {  
  let iso = true, grams = str.toLowerCase().split("").sort(), i = grams.length;
  while (i-- && i >= 0) {  
    if (isNaN(grams[i]) === false || grams[i] == grams[i-1]) {    
      iso = false
    }
  }
  return iso;
};
isIsogram("Dermatoglyphics")

/* 

Time: 324ms Passed: 21 Failed: 0
Test Results:
  Basic tests
✔ Test Passed: Value == 'true'
✔ Test Passed: Value == 'true'
✔ Test Passed: Value == 'false'
✔ Test Passed: Value == 'false'
✔ Test Passed: Value == 'false'
✔ Test Passed: Value == 'false'
✔ Test Passed: Value == 'true'
✔ Test Passed: Value == 'true'
 Completed in 6ms
  More tests
✔ Test Passed: Value == true
✔ Test Passed: Value == true
✔ Test Passed: Value == false
✔ Test Passed: Value == false
 Log
 Random tests
> nzc ?
✔ Test Passed: Value == true
 Log
 > nacywfghu ?
✔ Test Passed: Value == true
 Log
 > nzcdyw ?
✔ Test Passed: Value == true
 Log
 > zdctrhoFlgiqabxjyfmuwkpenvs ?
✔ Test Passed: Value == false
 Log
 > eubwfiUnjzpxags ?
✔ Test Passed: Value == false
 Log
 > qhlwvctdirnjybakzmegpsfuxR ?
✔ Test Passed: Value == false
 Log
 > atcksIfhrwyni ?
✔ Test Passed: Value == false
 Log
 > snyaefrmgjSzovbp ?
✔ Test Passed: Value == false
 Log
 > nzwvtrpbjfacehsgkqo ?
✔ Test Passed: Value == true
 Completed in 3ms
You have passed all tests! :)

*/