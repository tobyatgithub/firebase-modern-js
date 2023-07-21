// PROBLEM: Create a data structure that implements the requirements of a Least Recently Used (LRU)
// cache with O(1) average time complexity.

// - Initialize an object with a maxium capacity of elements.
// - getItem() Return the value of the key. Update cache with the most recently used key.
// - putItem() Create or update a key value pair in the cache. Evict the least recently used
// key if the size of keys exceeds the max capacity.

class LRU {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map(); // js map keeps the order!
  }

  printCache() {
    console.log("LRU Capacity:", this.capacity);
    console.log(this.cache);
  }

  getItem(key) {
    const item = this.cache.get(key);

    // refresh the order
    if (item) {
      this.cache.delete(key);
      this.cache.set(key, item);
    }
    console.log("getItem: ", item);
    return item;
  }

  putItem(key, item) {
    if (key in this.cache) {
      this.cache.delete(key);
    }
    this.cache.set(key, item);

    if (this.cache.size > this.capacity) {
      const oldestKey = this.cache.keys().next().value;
      console.log("toby", this.cache, oldestKey);
      this.cache.delete(oldestKey);
    }
  }
}

const cache = new LRU(5);
cache.putItem("a", 1);
cache.getItem("a");
cache.putItem("b", 2);
cache.putItem("c", 3);
cache.putItem("d", 4);
cache.putItem("e", 5);
cache.getItem("a");
cache.getItem("e");
cache.putItem("f", 6);
cache.getItem("b");
cache.printCache();

module.exports = { LRU };
