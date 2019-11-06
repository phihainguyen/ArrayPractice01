const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 }
];
const people = [
  "Berne, Eric",
  "Bernhard, Sandra",
  "Berra, Yogi",
  "Berry, Halle",
  "Berry, Wendell",
  "Bethea, Erin",
  "Bevan, Aneurin",
  "Bevel, Ken",
  "Biden, Joseph",
  "Bierce, Ambrose",
  "Biko, Steve",
  "Billings, Josh",
  "Biondo, Frank",
  "Birrell, Augustine",
  "Black, Elk",
  "Blair, Robert",
  "Beck, Glenn",
  "Becker, Carl",
  "Beckett, Samuel",
  "Beddoes, Mick",
  "Beecher, Henry",
  "Beethoven, Ludwig",
  "Begin, Menachem",
  "Benn, Tony",
  "Bennington, Chester",
  "Benson, Leana",
  "Bent, Silas",
  "Bentsen, Lloyd",
  "Berger, Ric",
  "Bergman, Ingmar",
  "Berio, Luciano",
  "Berle, Milton",
  "Berlin, Irving",
  "Belloc, Hilaire",
  "Bellow, Saul",
  "Benchley, Robert",
  "Benenson, Peter",
  "Ben-Gurion, David",
  "Benjamin, Walter",
  "Blair, Tony",
  "Blake, William"
];
// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const inventor15 = inventors.filter(inventor => {
  if (inventor.year >= 1500 && inventor.year < 1600) {
    return true;
  }
});
console.table(inventor15);

// Array.prototype.map()
// 2. Give us an array of the inventors' first and last names

const name = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
console.table(name);
// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
//the sorting metho will compare 2 at a time going through the array, by return -1 and 1 it will allow the sort method to sort the array accordingly, returning 1 meaning true for the condition u want to sort by and -1 would be false

// const sorter = inventors.sort(function(person1, person2) {
//   if (person1.year > person2.year) {
//     return 1;
//   } else {
//     return -1;
//   }
// });

// Array.prototype.reduce()
// 4. How many years did all the inventors live?

//we need the 0 in there because the total first time aroung would be undefined

// 5. Sort the inventors by years lived

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// const category = document.querySelector(".mw-category");
// const links = Array.from(category.querySelectorAll("a"));
// const de = links
//   .map(link => link.textContent)
//   .filter(streetName => streetName.includes("de"));

// 7. sort Exercise
// Sort the people alphabetically by last name

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = [
  "car",
  "car",
  "truck",
  "truck",
  "bike",
  "walk",
  "car",
  "van",
  "bike",
  "walk",
  "car",
  "van",
  "car",
  "truck"
];
