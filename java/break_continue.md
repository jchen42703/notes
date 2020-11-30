# Break/continue
https://softwareengineering.stackexchange.com/questions/58237/are-break-and-continue-bad-programming-practices

* When used at the start of a block, as first checks made, they act like preconditions, so it's good.
* When used in the middle of the block, with some code around, they act like hidden traps, so it's bad.
* Typically, `break` and `continue` are disliked by people who like one entry and one exit from any piece of code, and that sort of person also frowns on multiple return statements.
* "Make your functions small. Then make them smaller" -Robert C. Martin.
  * I found that this works surprisingly well. Every time you see a block of code in a function that needs a comment explaining what it does, wrap it into a separate function with a descriptive name. Even if it is only a few lines, and even if it is only used once. This practice eliminates most of the issues with break/continue or multiple returns.
* Nested loops are frequently (but not always) bad practice, because they're frequently (but not always) overkill for what you're trying to do. In many cases, there's a much faster and less wasteful way to accomplish the goal you're trying to achieve.
