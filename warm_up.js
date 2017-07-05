// Convert the following pieces of Ruby code to JavaScript.
//------------------------------------------------------------------------------
// apples = 14
// puts apples
//
// puts "I have #{apples} apples."
var amount_of_apples = 14
console.log("I have " + amount_of_apples + " apples.");

//------------------------------------------------------------------------------
// materials = ['wood', 'metal', 'stone']
// words = {
//   'elephant' => "The world's largest land mammal.",
//   'school' => 'A place of learning.',
//   'ice cream' => 'A delicious milk-based dessert.',
// }
var materials = ['wood', 'metal', 'stone'];
var words = {
  elephant: "The world's largest land mammal.",
  school: "A place of learning.",
  iceCream: "A delicious milk-based dessert."
}

//------------------------------------------------------------------------------
// num = 16
// if num > 10
//   puts "#{num} is greater than 10."
// elsif num == 10
//   puts "#{num} is exactly 10."
// else
//   puts "#{num} must be less than 10."
// end
var num = 16
if (num > 10)
  console.log(num + " is greater than 10.");
else if (num == 10)
  console.log(num + " is exactly 10.");
else
  console.log(num + " must be less than 10.");

//------------------------------------------------------------------------------
// 10.times do
//   puts "Doing the same thing over and over."
// end
for (var i = 1; i < 11; i++) {
  console.log('Doing the same thing over and over. (' + [i] + ' times now)');
}
// I chose 1-11 over 0-10 for output readability -Mike

//------------------------------------------------------------------------------
// base = 5
// 20.times do |num|
//   puts num + base
// end
var base = 5
for (newNum = 0; newNum < 20 ; newNum++) {
  console.log(newNum + base)
}

//------------------------------------------------------------------------------
// total = 0
// 100.times do |num|
//   total += num
// end
// puts total
var total = 0
var num = 1
for (i = 0; i < 100; i++) {
  total += num
}
console.log(total);

//------------------------------------------------------------------------------
// (3..15).each do |height|
//   if height > 9
//     puts "You can get on the rollercoaster!"
//   else
//     puts "You are too short to ride this rollercoaster."
//   end
// end
for (height = 3; height <= 15; height++) {
  if (height > 9)
    console.log('Your height is ' + height + '. You can ride this rollercoaster!');
  else
    console.log('Your height is ' + height + '. Maybe next summer, kid!');
}

//------------------------------------------------------------------------------
// containers = ['purse', 'wallet', 'backback']
// containers.each do |container|
//   puts container
// end
var containers = ['purse', 'wallet', 'backback'];

for (container = 0; container <= containers.length; container++) {
  console.log(containers[container]);
}

//------------------------------------------------------------------------------
// def hello_world
//   puts "Hello world!"
// end
//
// hello_world
function helloWorld() {
  console.log('Hello world!');
}
helloWorld()

//------------------------------------------------------------------------------
// def add(first_num, second_num)
//   first_num + second_num
// end
//
// amount = add(5, 7)
// puts amount
function add(firstNum, secondNum) {
  return firstNum + secondNum
}
var testAdd = add(3, 5);
console.log(testAdd);
