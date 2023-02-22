var WeightedRandomCollection = function() {
  // To be implemented, do not return anything
  this.colArr = []
  };
  /**
  * @param {number} userId
  * @return {boolean}
  */
  WeightedRandomCollection.prototype.add = function(userId) {
  // To be implemented
    if(this.colArr.indexOf(userId) === -1){
      this.colArr.push(userId)
      return true
    }
    else{
      this.colArr.push(userId)
      return false
    }
  };
  /**
  * @param {number} val
  * @return {boolean}
  */
  WeightedRandomCollection.prototype.delete = function(userId) {
  // To be implemented
    if(this.colArr.indexOf(userId) !== -1){
      let idx = this.colArr.indexOf(userId)
      this.colArr = [...this.colArr.slice(0,idx), ...this.colArr.slice(idx+1)]
      return true
    }
    else{
      return false
    }
  };
  /**
  * @return {number}
  */
  WeightedRandomCollection.prototype.pickRandom = function() {
  // To be implemented
  let randIdx = Math.floor(Math.random()*(this.colArr.length))
  let result = this.colArr[randIdx]
  return result
  };
  
  // Your WeightedRandomCollection object will be instantiated and called as
  console.log(new WeightedRandomCollection())
  obj = new WeightedRandomCollection()
  console.log(
    param_1 = obj.add(1),
    param_1 = obj.add(1),
    param_1 = obj.add(2),
    param_1 = obj.add(1),
    param_1 = obj.add(2),
    param_1 = obj.add(2),
    param_1 = obj.delete(1),
    param_1 = obj.delete(2),
    param_1 = obj.delete(2),
    param_1 = obj.delete(2),
    param_3 = obj.pickRandom(),
    param_3 = obj.pickRandom(),
    param_3 = obj.pickRandom(),
    param_3 = obj.pickRandom(),
    param_3 = obj.pickRandom(),
    param_3 = obj.pickRandom(),
    param_3 = obj.pickRandom(),
    param_3 = obj.pickRandom(),
    param_3 = obj.pickRandom(),
    param_3 = obj.pickRandom()  
  )