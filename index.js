function BoardMember(name, homeState, training){
  this.name = name
  this.homeState = homeState
  this.training = training
}

User.prototype.veto = function(){
  return 'No, I must disagree';
}
//
// User.prototype.approve = function(){
//   return 'You can do that!'
// }
//
// User.prototype.doCharity = function(){
//   return "I like to help people."
// }
//
// User.prototype.releasePressStatement = function(){
//   return "You will see great things from Scuber."
// }
//
// User.prototype.sayHi = function(){
//   return `Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.`
// }
