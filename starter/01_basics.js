// TODO: Create a student object with 'name' and 'age' properties
// TODO: Write a function 'printStudentName' that logs the student's name

function printStudentName() {
	// Your code here
	class Student {
		constructor(name, age) {
			this.name = name;
			this.age = age;
		}

		printName() {
			console.log("Student name is:", this.name);
		}
	}

	const student = new Student("Ava", 20);

	student.printName(); // Call the method to print the name
}

printStudentName(); // Call the function to test it

module.exports = { printStudentName };
