// == MY SOLUTION ==

class MyHashMap {
  constructor() {
    this.arr = [];
  }

  put(key, value) {
    let isHere = false;

    // Iterate through the array of this class' instance
    for (let i = 0; i < this.arr.length; i++) {
      // The current subarray
      let curr = this.arr[i];

      // If the first element of the sub-array matches the key
      if (curr[0] === key) {
        // Assign a new value to the second element of the sub-array
        curr[1] = value;
        isHere = true;
      }
    }

    if (!isHere) {
      this.arr.push([key, value]);
    }
  }

  /*
    Same loops for the methods below,
    but different code inside if blocks.
  */

  get(key) {
    let isHere = false;
    for (let i = 0; i < this.arr.length; i++) {
      let curr = this.arr[i];
      if (curr[0] === key) {
        return curr[1];
      }
    }

    if (!isHere) {
      return -1;
    }
  }

  remove(key) {
    for (let i = 0; i < this.arr.length; i++) {
      let curr = this.arr[i];
      if (curr[0] === key) {
        this.arr.splice(i, 1);
      }
    }
  }
}

// == A MUCH SIMPLER SOLUTION ==

class MyHashMap {
  constructor() {
    this.map = new Array(1000001).fill(-1);
  }

  put(key, value) {
    this.map[key] = value;
  }

  get(key) {
    return this.map[key];
  }

  remove(key) {
    this.map[key] = -1;
  }
}
