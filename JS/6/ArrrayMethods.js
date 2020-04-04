"use strict";

import users from "./users.js";

// 1

const getUserNames = users => users.map(user => user.name);

console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr',
//'Blackburn Dotson', 'Sheree Anthony' ]

// 2

const getUsersWithEyeColor = (users, color) =>
  users.filter(user => user.eyeColor === color);

console.log(getUsersWithEyeColor(users, "blue"));
// [объект Moore Hensley, объект Sharlene Bush,
// объект Carey Barr]

// 3

const getUsersWithGender = (users, gender) => {
  return users.reduce((acc, user) => {
    if (user.gender === gender) {
      acc.push(user.name);
    }
    return acc;
  }, []);
};

console.log(getUsersWithGender(users, "male"));
// [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

// 4

const getInactiveUsers = users => users.filter(user => !user.isActive);
console.log(getInactiveUsers(users));
// [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

// 5

const getUserWithEmail = (users, email) => {
  return users.find(user => user.email === email);
};

console.log(getUserWithEmail(users, "shereeanthony@kog.com")); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, "elmahead@omatom.com")); // {объект пользователя Elma Head}

// 6

const getUsersWithAge = (users, min, max) => {
  return users.filter(user => user.age > min && user.age < max);
};

console.log(getUsersWithAge(users, 20, 30));
// [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

console.log(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

// 7

const calculateTotalBalance = users =>
  users.reduce((acc, user) => (acc += user.balance), 0);

console.log(calculateTotalBalance(users));
// 20916

// 8

const getUsersWithFriend = (users, friendName) => {
  return users.reduce((acc, user) => {
    if (user.friends.find(friend => friend === friendName)) {
      acc.push(user.name);
    }
    return acc;
  }, []);
};

console.log(getUsersWithFriend(users, "Briana Decker"));
// [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, "Goldie Gentry"));
// [ 'Elma Head', 'Sheree Anthony' ]

// 9

const getNamesSortedByFriendsCount = users => {};

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
