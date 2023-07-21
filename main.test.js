import { expect, test } from "vitest";

import { cumSum } from "./algo_1_cumulative_sum";
import { binarySearch } from "./algo_2_binary_search";
import { LRU } from "./algo_3_LRU";

test("cumulative sum of an arry", () => {
  expect(cumSum([1, 3, 5, 7])).toBe(16);
  expect(cumSum([-2, -4, -8])).toBe(-14);
});

test("binary search of an sorted arry", () => {
  expect(binarySearch([1, 3, 5, 7], 5)).toBe(2);
  expect(binarySearch([-8, -4, -2], -4)).toBe(1);
  expect(binarySearch([-8, -4, -2], 0)).toBe(-1);
});

test("test LRU", () => {
  const cache = new LRU(2);
  expect(cache.getItem("a")).toBe(undefined);
  cache.putItem("a", 1);
  expect(cache.getItem("a")).toBe(1);
  cache.putItem("b", 2);
  cache.putItem("c", 3);
  expect(cache.getItem("a")).toBe(undefined);
  expect(cache.getItem("c")).toBe(3);
});
