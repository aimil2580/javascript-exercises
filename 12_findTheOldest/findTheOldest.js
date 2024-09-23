const findTheOldest = function (array) {
    let oldest = 0
    let oldestObj
    const date1 = new Date().getFullYear();
    array.map((people) => {
        if ("yearOfDeath" in people) {
            if (parseInt(people.yearOfDeath - people.yearOfBirth) > oldest) {
                oldestObj = people
                oldest = parseInt(people.yearOfDeath - people.yearOfBirth)
            }
        } else {
            if (parseInt(date1 - people.yearOfBirth) > oldest) {
                oldestObj = people
                oldest = parseInt(date1 - people.yearOfBirth)
            }
        }
    }
    )
    return oldestObj
};


// Do not edit below this line
module.exports = findTheOldest;
