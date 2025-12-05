function testClosure(company) {
  return function (employee) {
    console.log(`Hello ${employee}! Welcome to ${company}`)
  }
}

let greetFromNokia = testClosure('Nokia');
let greetFromBlackberry = testClosure('BBM');

greetFromNokia('John')
greetFromBlackberry('Jerry')
