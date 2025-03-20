class HashMap {
    constructor(initialCapacity = 16, loadFactor = 0.75) {
      this.buckets = new Array(initialCapacity);
      this.size = 0;
      this.capacity = initialCapacity;
      this.loadFactor = loadFactor;
    }
  
    hash(key) {
      let hashCode = 0;
      const primeNumber = 31;
      for (let i = 0; i < key.length; i++) {
        hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
      }
      return hashCode;
    }
  
    set(key, value) {
      if (this.size / this.capacity >= this.loadFactor) {
        this.resize();
      }
      const index = this.hash(key);
      if (!this.buckets[index]) {
        this.buckets[index] = [];
      }
      for (let pair of this.buckets[index]) {
        if (pair[0] === key) {
          pair[1] = value;
          return;
        }
      }
      this.buckets[index].push([key, value]);
      this.size++;
    }
  
    get(key) {
      const index = this.hash(key);
      const bucket = this.buckets[index];
      if (!bucket) return null;
      for (let pair of bucket) {
        if (pair[0] === key) return pair[1];
      }
      return null;
    }
  
    has(key) {
      return this.get(key) !== null;
    }
  
    remove(key) {
      const index = this.hash(key);
      const bucket = this.buckets[index];
      if (!bucket) return false;
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) {
          bucket.splice(i, 1);
          this.size--;
          return true;
        }
      }
      return false;
    }
  
    length() {
      return this.size;
    }
  
    clear() {
      this.buckets = new Array(this.capacity);
      this.size = 0;
    }
  
    keys() {
      return this.buckets.flatMap(bucket => (bucket ? bucket.map(pair => pair[0]) : []));
    }
  
    values() {
      return this.buckets.flatMap(bucket => (bucket ? bucket.map(pair => pair[1]) : []));
    }
  
    entries() {
      return this.buckets.flatMap(bucket => (bucket ? bucket.map(pair => pair) : []));
    }
  
    resize() {
      this.capacity *= 2;
      const oldBuckets = this.buckets;
      this.buckets = new Array(this.capacity);
      this.size = 0;
      for (const bucket of oldBuckets) {
        if (bucket) {
          for (const [key, value] of bucket) {
            this.set(key, value);
          }
        }
      }
    }
  }
  

  const test = new HashMap();
  test.set('apple', 'red');
  test.set('banana', 'yellow');
  test.set('carrot', 'orange');
  test.set('dog', 'brown');
  test.set('elephant', 'gray');
  test.set('frog', 'green');
  test.set('grape', 'purple');
  test.set('hat', 'black');
  test.set('ice cream', 'white');
  test.set('jacket', 'blue');
  test.set('kite', 'pink');
  test.set('lion', 'golden');
  test.set('moon', 'silver');
  
  console.log(test.entries());