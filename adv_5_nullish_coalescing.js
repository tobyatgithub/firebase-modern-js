// Nullish coalescing is a relativly new operator that was introduced in ES2020. 
// It is similar to the logical OR operator ||, but it only returns the right-hand 
// side if the left-hand side is null or undefined.

const foo = null ?? "bar";
console.log(foo); // bar

const loo = 0 ?? "bar";
console.log(loo); // 0

// notice that js has a very strange list of what it thinks as truthy and falsy.