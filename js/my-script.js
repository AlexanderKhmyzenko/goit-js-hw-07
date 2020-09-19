const players = [
  {
    id: "player-1",
    name: "Mango",
    timePlayed: 310,
    points: 54,
    online: false,
  },
  {
    id: "player-2",
    name: "Poly",
    timePlayed: 470,
    points: 92,
    online: true,
  },
  {
    id: "player-3",
    name: "Kiwi",
    timePlayed: 230,
    points: 48,
    online: true,
  },
  {
    id: "player-4",
    name: "Ajax",
    timePlayed: 150,
    points: 71,
    online: false,
  },
  {
    id: "player-5",
    name: "Chalsy",
    timePlayed: 280,
    points: 48,
    online: true,
  },
];

const onlinePlayers = players.filter((player) => player.online);
console.table(onlinePlayers);

const offlinePlayers = players.filter((player) => !player.online);
console.table(offlinePlayers);
// фильтр проверяет массив до конца и возвращает подколлекцию

const salary = {
  Mango: 100,
  Ajax: 200,
  Poly: 150,
};
const totalSalary = Object.values(salary).reduce(
  (total, value) => total + value,
  0
);
console.log(totalSalary);

const numbers = [5, 10, 15, 20, 25];
// const total = numbers.reduce((acc, number) => {
//   return acc + number;
// }, 0);
// console.log(total);
const total = numbers.reduce((acc, number) => acc + number, 100);
console.log(total);
// reduce поэлементно проверяет весь массив и возвращает что угодно(берет много и делает одно)
// например вернет сумму всех элементов массива цыфр

const number = numbers.find((number) => number === 101);
console.log(number);

// find проверяет массив до первого сходства,возвращает значение найденного элемента  и прекращает поиск

const findPlayerById = (allPlayer, playerId) => {
  return allPlayer.find(({ id }) => id === playerId);
};

console.log(findPlayerById(players, "player-1"));
// console.log(findPlayerById(players, "player-3"));

const playerIdToFind = "player-3";
const playerWithId = players.find(({ id }) => id === playerIdToFind);
// console.log(playerWithId);

const playerNames = players.map((player) => {
  return player.name;
});
console.log(playerNames);

// map проверяет весь массив, возвращает новый масив с одним или несколькими значениями элементов старого
const isAllOnline = players.every((player) => player.online);
// console.log(isAllOnline);

// every поэлементно проверяет весь массив и возвращает true если все элементы соответствуют условию

const isAnyOnline = players.some((player) => player.online);
console.log(isAnyOnline);

// some поэлементно проверяет весь массив и возвращает true если хоть один элемент соответствует условию

const totalTimePlayed = players.reduce(
  (totalTime, player) => totalTime + player.timePlayed,
  0
);
console.log(totalTimePlayed);

const cart = [
  { labels: "Apples", price: 100, quntity: 2 },
  { labels: "Bananas", price: 120, quntity: 3 },
  { labels: "Lemons", price: 70, quntity: 4 },
];

const totalAmount = cart.reduce(
  (total, { price, quntity }) => total + price * quntity,
  0
);
console.log(totalAmount);

const sortByBestPlayer = [...players].sort(
  (prevPlayer, nextPlayer) => prevPlayer.timePlayed - nextPlayer.timePlayed
);
console.table(sortByBestPlayer);

const byName = [...players].sort((prevPlayer, nextPlayer) => {
  const result = prevPlayer.name[0] > nextPlayer.name[0];

  if (result) {
    return 1;
  }
  if (!result) {
    return -1;
  }
});
console.table(byName);

// узнать юникод символа
const word = "avmrtup";
console.log(word.charCodeAt(0));
console.log(word.charCodeAt(3));
console.log(word.charCodeAt(6));

// метод для разглаживания многоуровневого масива (flat)

const array = [1, 2, [4, [5]], 7, 8, [9, [10], [11]]];
console.log(array.flat(2));

// цепочки вызовов chaining(если результатом вызова метода приходит новый масив то на нем можно вызвать новый метод)

const sorted = numbers
  .filter((num) => num > 2)
  .map((num) => num * 3)
  .sort((a, b) => a - b);

console.log(sorted);

// Lodash(если в боди подключена ссылка на минифицированный скрипт библиотеки Lodash)
// вызов console.dir(_); и через .любой метод
console.dir(_);
const user = {
  name: "Anton",
  location: {
    city: "Kharkov",
  },
};
console.log(_.get(user, "location.city"));
// get возвращает тру или фолс и позволяет избежать ошибки в консоле в случае фолс.
// Он просто вернет андефайн на первом не найденом свойстве

console.log(_.union([1, 2, 3, 4], [2, 3, 7, 4, 9, 1]));
// union обьединит два и более масива взяв только уникальные элементы
