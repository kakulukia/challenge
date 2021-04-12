const arr1 = [
  {
    id: 35,
    title: "Draft",
    entity: "MEASURE",
    category: "status",
    order: 0,
    created: "2021-02-04T16:23:45+01:00",
    modified: "2021-02-04T16:42:10+01:00",
  },
  {
    id: 36,
    title: "Confirmed/valid",
    entity: "MEASURE",
    category: "status",
    order: 1,
    created: "2021-02-04T16:23:45+01:00",
    modified: "2021-02-04T16:42:12+01:00",
  },
  {
    id: 37,
    title: "Implemented",
    entity: "MEASURE",
    category: "status",
    order: 2,
    created: "2021-02-04T16:23:45+01:00",
    modified: "2021-02-04T16:42:13+01:00",
  },
  {
    id: 38,
    title: "Obsolete",
    entity: "MEASURE",
    category: "status",
    order: 3,
    created: "2021-02-04T16:23:45+01:00",
    modified: "2021-02-04T16:42:15+01:00",
  },
];
const arr2 = [
  {
    id: 41,
    name: "Amsterdam",
  },
  {
    id: 2,
    entity: "MEASURE",
  },
  {
    id: 42,
    name: "Berlin",
    entity: "MEASURE",
  },
];

const arr3 = [
  {
    id: 41,
    title: "Dolor sit",
    value: "an important value",
  },
  {
    id: 42,
    title: "Lorem Ipsum",
    value: "another important value",
  },
];

function myfunc(arr) {
  values = arr.map(item => { return item.value || item.name || item.title })
  return values.filter(item => { return item !== undefined }).join(", ")
}

console.clear();

console.log(myfunc(arr1)); // "Draft, Confirmed/valid, Implemented, Obsolete"
console.log(myfunc(arr2)); // "Amsterdam, Berlin"
console.log(myfunc(arr3)); // "an important value, another important value"
