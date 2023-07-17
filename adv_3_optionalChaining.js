const obj = undefined;

obj?.hello; // this will return undefined instead of break your code.

const arr = [1,2,3];
arr?.[0];

function foo(a,b) {}
foo?.(1,2);