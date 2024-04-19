const findTheOldest = function(people) {
    people.sort((b,a) => {
        return (((a.yearOfDeath !== undefined ? a.yearOfDeath : 2024) - a.yearOfBirth) - ((b.yearOfDeath !== undefined ? b.yearOfDeath : 2024) - b.yearOfBirth));
    });
    return people[0];
};

// Do not edit below this line

module.exports = findTheOldest;
