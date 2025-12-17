import Article from "./Article.mjs";
import { mult, sum } from "./math.mjs";
import cowsay from "cowsay";
console.log("hi from node!");

console.log(cowsay.say({text:'qwerty!'}));

const num1 = 5;
const num2 = 8;
console.log(num1, num2);
console.log(mult(4, 9));

const newArticle = new Article("Content for article!");
console.log(newArticle.render());
