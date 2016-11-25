// Calculating with Functions
// 423 - 19 - 93% of 337 - 4183 of 5305 - BattleRattle
// 

const calc = (n, opt) => {
  return (opt) ? opt.call(opt, n) : n;
}

const zero = (opt)  => { return calc(0, opt); }
const one = (opt)   => { return calc(1, opt); }
const two = (opt)   => { return calc(2, opt); }
const three = (opt) => { return calc(3, opt); }
const four = (opt)  => { return calc(4, opt); }
const five = (opt)  => { return calc(5, opt); }
const six = (opt)   => { return calc(6, opt); }
const seven = (opt) => { return calc(7, opt); }
const eight = (opt) => { return calc(8, opt); }
const nine = (opt)  => { return calc(9, opt); }

const plus = (num)       => { return (res) => { return res + num; }; }
const minus = (num)      => { return (res) => { return res - num; }; }
const times = (num)      => { return (res) => { return res * num; }; }
const dividedBy = (num)  => { return (res) => { return res / num; }; }


/* Test Cases:

Test.assertEquals(seven(times(five())), 35);
Test.assertEquals(four(plus(nine())), 13);
Test.assertEquals(eight(minus(three())), 5);
Test.assertEquals(six(dividedBy(two())), 3);

Instructions


Output

Time: 408ms Passed: 24 Failed: 0
Test Results:
  static example calculations
✔ Test Passed: Value == 35
✔ Test Passed: Value == 13
✔ Test Passed: Value == 5
✔ Test Passed: Value == 3
 Completed in 5ms
  random calculations
  add (5 Passed, 0 Failed)
  subtract (5 Passed, 0 Failed)
  multiply (5 Passed, 0 Failed)
  divide (5 Passed, 0 Failed)
 Completed in 5ms
You have passed all tests! :)

 */