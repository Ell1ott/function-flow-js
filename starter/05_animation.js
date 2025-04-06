// TODO: Write a function 'move' that simulates a rocket moving back and forth in the console
// TODO: Use 'console.clear()', 'console.log()', and basic logic with position

function move() {
	// Your code here
	let time = 0;
	setInterval(() => {
		console.clear();
		console.log(" ".repeat(Math.round(Math.sin(time / 10) * 10 + 11)) + "🚀");
		time += 1;
	}, 10);
}

move(); // Call the function to test it
module.exports = { move };
