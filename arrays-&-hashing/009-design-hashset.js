class MyHashSet {
  constructor() {
    // When constructed, the hash set initially has an empty array
    this.arr = [];
  }

  /**
   * @param {number} key
   * @return {void}
   */
  add(key) {
    // Push the key to the array of this class' instance
    this.arr.push(key);
  }

  /**
   * @param {number} key
   * @return {void}
   */
  remove(key) {
    /*
      Reassign a filtered array to the array of this class' instance.
      Filtered array will only have elements that do not match the key.     
    */
    this.arr = this.arr.filter((el) => el !== key);
  }

  /**
   * @param {number} key
   * @return {boolean}
   */
  contains(key) {
    /*
      Use the includes method to check if it exists, 
      which conveniently returns a boolean        
    */
    return this.arr.includes(key);
  }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
