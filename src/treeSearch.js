class Node {
    constructor(key = null, left = null, right = null) {
      this.key = key;
      this.left = left;
      this.right = right;
    }
  
    getLeft() {
      return this.left;
    }
  
    getRight() {
      return this.right;
    }
    
    getKey() {
      return this.key;
    }
  
    search(key) {
      const cur = this.getKey();
      const leftKey = this.getLeft();
      const rightKey = this.getRight();
  
      if(key === cur) {
        return this;
      }
  
      if(key < cur && leftKey) {
        return leftKey.search(key);
      }
  
      if(key > cur && rightKey) {
        return rightKey.search(key);
      }
  
      return null;
    }
  }