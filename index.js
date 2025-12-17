console.log("hi from node!");

const num1 = 5;
const num2 = 8;

const mult = (n1, n2) => n1 * n2;

console.log(num1 + num2);
console.log(mult(4, 9));

class Article {
  constructor(content) {
    this.content = content;
  }
  render() {
    return this.content;
  }
}
const newArticle = new Article('Content for article!')
console.log(newArticle.render());

