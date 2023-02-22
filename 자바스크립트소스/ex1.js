class FollowSystem {
  constructor() {
    // to be implemented. do not return anything
    this.followerList = {};
    this.followingList = {};
  }
  follow(from, to) {
    // followerList update
    if (this.followerList[to] === undefined) {
      this.followerList[to] = [from.toString()];
    } 
    else if (this.followerList[to].indexOf(from) === -1) {
        this.followerList[to] = [...this.followerList[to], from.toString()];
      }
    
    // followingList update
    if (this.followingList[from] === undefined) {
      this.followingList[from] = [to.toString()];
      return true;
    } 
    else {
      if (this.followingList[from].indexOf(to) === -1) {
        this.followingList[from] = [...this.followingList[from], to.toString()];
        return true;
      } 
      else {
        return false;
      }
    }
  }
  unfollow(from, to) {
    // followerList update
    if(this.followerList[to] === undefined){
      return false
    }
    else if(this.followerList[to].indexOf(from.toString()) !== -1){
      this.followerList[to] = this.followerList[to].filter((v)=>(v !== from.toString()))
    }
    else{
      return false
    }

    // followingList update
    if(this.followingList[from].indexOf(to.toString()) !== -1){
      this.followingList[from] = this.followingList[from].filter((v)=>(v !== to.toString()))
      return true
    }
    else{
      return false
    }
  }
  followerCount(userId) {
    let count = 0;
    if(this.followerList[userId] !== undefined) {
      count = this.followerList[userId].length
    }
    return count;
  }
  followingCount(userId) {
    let count = 0;
    if(this.followingList[userId] !== undefined){
      count = this.followingList[userId].length
    }
    return count;
  }
  isMutualFollowing(user1Id, user2Id) {
    let isMutual = false;
    let following1 = this.followingList[user1Id]
    let following2 = this.followingList[user2Id]

    if(following1 !== undefined && following2 !== undefined){
      if(following1.indexOf(user2Id.toString()) !== -1 && following2.indexOf(user1Id.toString()) !== -1){
        isMutual = true
      }
      else{
        isMutual = false
      }
    }
    return isMutual;
  }
  commonFollowList(user1Id, user2Id) {
    let list = [];
    let following1 = this.followingList[user1Id]
    let following2 = this.followingList[user2Id]
    
    if(following1 !== undefined && following2 !== undefined){
      list = following1.filter((v)=>following2.some(v2=>v==v2))
    }
    return list;
  }
}

const system = new FollowSystem();

console.log(
  new FollowSystem(),
  system.follow('A', 'B'),
  system.follow('A', 'C'),
  system.follow('C', 'D'),
  system.follow('C', 'B'),
  system.followerCount('A'), // 1
  system.followingCount('A'), // 2
  system.isMutualFollowing('A', 'C'), // true
  system.commonFollowList('A', 'C'), // ['B']
  system.unfollow('A', 'C'),
  system.followingCount('A'), // 1
  system.isMutualFollowing('A', 'C') // false
)

// system.follow('aaa1','aaa2')
// system.follow('aaa1','aaa2')
// system.follow('aaa2','aaa3')
// system.follow('aaa1','aaa3')
// system.unfollow('aaa3','aaa1')
// system.unfollow('aaa5','aaa1')
// system.unfollow('aaa2','aaa3')
// system.isMutualFollowing('aaa7','aaa8')
