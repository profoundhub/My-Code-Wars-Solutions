let digital_root = (n) => {
  while (n >9) {
    n = n.toString().split('').reduce((res, c) => {
      console.log(n);
      return res + parseInt(c, 10);
    },0);
  }
  console.log(n);
  return n;
}

/* Good Job! You may take your time to refactor/comment your solution. Submit when ready.×

Example Tests:

Test.assertEquals( digital_root(16), 7 )

*/
/* 

Output:

Time: 323ms Passed: 6 Failed: 0

Test Results:

✔ Test Passed: Value == 7
✔ Test Passed: Value == 6
✔ Test Passed: Value == 2
✔ Test Passed: Value == 9
✔ Test Passed: Value == 9
✔ Test Passed: Value == 0

You have passed all tests! :)

*/