const obj1 = {
  fisrt: "a",
  second: "b",
  third: "c",
};

const obj2 = {
  third: "d",
  fourth: "e",
};

// // merge. Notice that the later one has higher priority
// // i.e. the 'third' will be 'd' becasue obj2 comes later.
// const full = Object.assign({}, obj1, obj2);
// // merge by spread
const full = { ...obj1, ...obj2 };

const full2 = {
  ...obj1,
  third: "d",
  fourth: "e",
  // if you move ...obj1 to this line, third will end up be 'c'
};
