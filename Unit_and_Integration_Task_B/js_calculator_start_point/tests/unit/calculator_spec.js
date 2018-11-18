var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  });

  // unit tests
  it('should add two numbers', function(){
    calculator.previousTotal = 4;
    calculator.add(1);
    var actual = calculator.runningTotal;
    var expected = 5;
    assert.equal(expected, actual)
  });

  it('should subtract a number from another', function(){
    calculator.previousTotal = 7
    calculator.subtract(4);
    var actual = calculator.runningTotal;
    var expected = 3;
    assert.deepStrictEqual(expected, actual)
  });

  it('should multiply 2 numbers', function(){
    var expected = 15;
    calculator.previousTotal = 5;
    calculator.multiply(3);
    actual = calculator.runningTotal;
    assert.deepStrictEqual(expected, actual);
  });

  it('should divide a number by another number', function(){
    var expected = 3;
    calculator.previousTotal = 21;
    calculator.divide(7);
    var actual = calculator.runningTotal;
    assert.deepStrictEqual(expected, actual);
  });

  // integration tests

  it('should concentenate multiple button clicks', function(){
    var expected = 58;
    calculator.numberClick(5);
    calculator.numberClick(8);
    var actual = calculator.runningTotal;
    assert.deepStrictEqual(expected, actual);
  });

  it('should multiple two numbers then subtract a third number', function(){
    var expected = 18;
    calculator.numberClick(5);
    calculator.operatorClick('*');
    calculator.numberClick(4);
    calculator.operatorClick('-');
    calculator.numberClick(2);
    calculator.operatorClick('=');
    var actual = calculator.runningTotal;
    assert.equal(expected, actual);
  });

  it('', function(){
    calculator.numberClick(2);
    calculator.operatorClick('+');
    calculator.numberClick(3);
    calculator.operatorClick('=');
    calculator.operatorClick('+');
    calculator.numberClick(2);
    calculator.numberClick(2);
    calculator.clearClick()
    calculator.numberClick(6);
    calculator.operatorClick('=');
    var expected = 11;
    var actual = calculator.runningTotal;
    assert.equal(expected, actual);

  });

});
