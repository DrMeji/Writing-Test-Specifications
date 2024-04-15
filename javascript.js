// Unit Tests:

// 'Multiplication' Function:

1. Expect multiplication(2, 3) to be a number
2. Expect multiplication(2, 3) to be equal to 6
3. Expect multiplication("a", 3) to be an error // testing unexpected input
4. Expect multiplication () to be an error
5. Expect multiplication(0, 3) to be equal to 0 // testing multiplication by zero
6. Expect multiplication(-3, 4) to be 12

// 'concarOdds' Function:

1. takes two arrays of integers as arugments. It should return a single array that only contains the odd SVGAnimatedNumberList, in ascending order, from both of the arrays.
2. Expect concatOdds(  ) to be an error
3. Expect concatOdds(["hello", World, "two", 4, 9,[null]]) to be an error
4. Expect concatOdds([3, 2, 1], [9, 1, 1, 1, 4, 15, -1]) the result is [-1, 1, 3, 9, 15]
5. Expect concatOdds(['three', 2, 1], [9, 1, 1, 1, 4, 15, -1]) to be error

// 'Functional' Tests:

1. A shopping cart checkout feature that allows a user to check out as a guest (without an account), or as a logged-in user. They should be allowed to do either, but should be asked if they want to create an account or log in if they check out as a guest.
2. Customers should see a notice on the screen when they scan an item stating that it is currently on sale for a limited time only and that they may buy one and get one free.
3. Customers that have memberships in the store ought to receive notifications when new items are added. 
4. When a user adds an item to their cart the cart total should be updated accordingly
5. A consumer should present identification to the cash register when purchasing any beverages that include alcohol. 