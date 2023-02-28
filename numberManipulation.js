//create a varialbe to hold the list of numbers
let userNumbersList = ''
//create a varialbe to hold the sum of numbers
let userNumbersListSum = 0
//create a counted for do while
let counter = 0

//create a facility to allow a user to add 10 numbers
do {
    userNumbersList += prompt("Input 10 numbers!") + ' '
    counter++
} while(counter  < 10)

//create an array by splitting the string at a 'space'
let splitList = userNumbersList.split(' ')
console.log(splitList)
//remove the space
splitList.pop()

//call the function and pass in the userSum function as an argument
splitList.forEach(userSum)

//create a function to create a pattern for adding each number in an array, remember we have strings in that 
function userSum(number) {
    
    userNumbersListSum += parseFloat(number)

  }
  //log the sum of the user numbers
console.log(userNumbersListSum)

//information for Math.max.apply() found on website https://www.freecodecamp.org/news/three-ways-to-return-largest-numbers-in-arrays-in-javascript-5d977baa80a1/
//create a variable to store the largest number in an array
let splitListMax = Math.max.apply(0, splitList)

//create a variable to store the index of the largest number
let splitListMaxIndex = splitList.indexOf(String(splitListMax))

//log the index of the max value
console.log(splitListMaxIndex)

//create a variable to store the smallest number in an array
let splitListMin = Math.min.apply(0, splitList)

//create a variable to store the index of the smallest number
let splitListMinIndex = splitList.indexOf(String(splitListMin))

//log the index of the smallest number
console.log(splitListMinIndex)

//get the average of the numbers in a string 
let numbersAverage = userNumbersListSum/splitList.length


//information about toFixed() taken from https://linuxhint.com/round-number-to-2-decimal-places-javascript/#b1
//create a variable to hold the rounded value of the average
let numbersAverageRounded = numbersAverage.toFixed(2)
//log the rounded average number
console.log(numbersAverageRounded)

//find the median number
// For this task I used information from website https://www.delftstack.com/howto/javascript/find-median-in-javascript/

//sort the splitList array first
splitListSorted = splitList.sort(function(a, b){return a - b});



//create a function returning a median of an array
function findMedian(splitList) {
	let splitListLength = splitList.length
	let middleIndex = Math.floor(splitListLength / 2)
	let oddLength = splitListLength % 2 != 0
	let median
	if(oddLength) { 
        //if array is at odd length, find an element at middle index
		median = splitListSorted[middleIndex]
	} else {
		median = (splitListSorted[middleIndex] + splitListSorted[middleIndex - 1]) / 2
	}
	return median
}
//call the function and pass the median to a variable
let medianConsole = findMedian(splitList)
console.log(medianConsole)
