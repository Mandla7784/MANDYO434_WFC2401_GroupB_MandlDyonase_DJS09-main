import { Review } from "./interfaces";

export default class MainProperty {
  src: string;
  title: string;
  reviews: Review[];
  constructor(src: string, title: string, reviews: Review[]) {
    this.src = src;
    this.title = title;
    this.reviews = reviews;
  }
}

//TypeScript is a superset of JavaScript that adds static types to the language. This helps catch errors early and makes the code easier to understand and maintain. Let's walk through some basic TypeScript concepts with code examples
