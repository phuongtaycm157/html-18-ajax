var Dog = require('./Dog');
function Cat () {
    this.stomach = [];
}

Cat.prototype.eat = function(mouse) {
    this.stomach.push(mouse);
}

var dog = new Dog();
var cat = new Cat();

dog.eat(cat);
console.log(dog.stomach);