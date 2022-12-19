class Vector {
  constructor(vec) {
    this.vec = vec
  }
  add(addItem) {
    if (addItem.vec.length !== this.vec.length) {
      throw new Error('error!')
    }
    const result = [];
    let sum = 0;
    for (let i = 0; i < this.vec.length; i++) {
      sum = this.vec[i] + addItem.vec[i]
      result.push(sum);
    }
    return new Vector(result);
  }
  subtract(subItem) {
    if (subItem.vec.length !== this.vec.length) {
      throw new Error('error!')
    }
    const result = [];
    let sum = 0;
    for (let i = 0; i < this.vec.length; i++) {
      sum = this.vec[i] - subItem.vec[i]
      result.push(sum);
    }
    return new Vector(result);
  }
  dot(dotItem) {
    if (dotItem.vec.length !== this.vec.length) {
      throw new Error('error!')
    }
    const result = [];
    let sum = 0;
    for (let i = 0; i < this.vec.length; i++) {
      sum = this.vec[i] * dotItem.vec[i]
      result.push(sum);
    }
    const resultSum = result.reduce((acc, item) => acc + item);
    return resultSum;
  }
  norm() {
    const resultSum = this.vec.reduce((acc, item) => acc + item);
    return Math.sqrt(resultSum);
  }
  toString() {
    return `(${this.vec})`
  }
  equals(equalVector) {
    return this.vec.toString() == equalVector.vec.toString() ? true : false
  }
}