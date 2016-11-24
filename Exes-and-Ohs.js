let XO = (str) => {
  let result = 0, i = 0;  
  for (i = 0; i < str.length; i++) {
    let ox = str[i].toLowerCase();
    if (ox === "o") {        
      result++;    
    } else if (ox === "x") {          
      result--;
    }  
  }
  return result === 0;    
}

/*

Impressive! You may take your time to refactor/comment your solution. Submit when ready.

Example Tests:

Test.assertEquals(XO('xo'),true);
Test.assertEquals(XO("xxOo"),true);
Test.assertEquals(XO("xxxm"),false);
Test.assertEquals(XO("Oo"),false);
Test.assertEquals(XO("ooom"),false);

Output:

Time: 376ms Passed: 11 Failed: 0

Test Results:
✔ Test Passed: Value == true
✔ Test Passed: Value == true
✔ Test Passed: Value == true
✔ Test Passed: Value == false
✔ Test Passed: Value == true
✔ Test Passed: Value == true
✔ Test Passed: Value == true
✔ Test Passed: Value == false
✔ Test Passed: Value == false
✔ Test Passed: Value == false
✔ Test Passed: Value == true

You have passed all tests! :)

*/