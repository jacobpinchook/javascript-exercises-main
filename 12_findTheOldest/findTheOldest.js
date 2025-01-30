const findTheOldest = function(arr) {
    // Calculate age for each person in the array of objects
    const updatedArr = arr.map((person) => (!person.yearOfDeath) ? person.age = (currentTime.getFullYear() - person.yearOfBirth) : person.age = (person.yearOfDeath - person.yearOfBirth));
    // Compare the ages
    const sortedArr = arr.sort((a, b) => b.age - a.age);
    // Return the name of the object with the highest age value
    return sortedArr[0];
};

// Do not edit below this line
module.exports = findTheOldest;
