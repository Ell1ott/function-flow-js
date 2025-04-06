// TODO: Write a function 'totalScores' that takes an array of numbers
// TODO: Return the sum of all numbers in the array

totalScores([1, 2, 3, 4, 5]); // 15
totalScores([10, 20, 30]); // 60


function totalScores(scores) {
	// Your code here
	totalScore = scores.reduce((current, total) => current + total, 0);
	console.log(totalScore); // Print the total score
	return totalScores;
}

module.exports = { totalScores };
