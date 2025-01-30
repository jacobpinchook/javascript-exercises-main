const findTheOldest = function(arr) {
    // Store current date
    const d = new Date();
    // Add the age for each person into each object
    const updatedArr = arr.map((person) => (!person.yearOfDeath) ? person.age = (d.getFullYear() - person.yearOfBirth) : person.age = (person.yearOfDeath - person.yearOfBirth));
    // Sort new array
    const sortedArr = arr.sort((a, b) => b.age - a.age);
    // Return the object with the highest age value
    return sortedArr[0];
};

// Do not edit below this line
module.exports = findTheOldest;
