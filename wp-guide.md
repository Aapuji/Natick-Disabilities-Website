# Wordpress & Local Guide
## A common file to share the Wordpress posts used

This is purely for development purposes, and doesn't affect the final product (probably delete once final product is finished).

Here were enter all of the posts, categories, descriptions, etc. to enter in Wordpress. That way we can sync up Local on our machines and see the same output.

### Conventions

##### Categories

Each page should have a category associated with it. For example, Home would have a category, etc.
For a category associated with a page, the name should be `PAGE_NAME Page` with first letters being uppercase, like `Home Page`,. The slug should be `PAGE_NAME-page-category` with all letters lowercase and with hyphens separating words, like `home-page-category`. 

The description of a page-category is the order of the posts on the page, separated by new lines. However, you can add numbers before each line to signify the order (specifically, anything that satisifies `/ *[0-9]*\.? */` regex code), but that is purely for the user, and doesn't affect the outcome. An example:
```
1. Emergency Information
 2. What is the Commission on Disability?
5.Test HTML Output
Bye Bye
3. Hello World
```

The output of this would be in the order: 
```
1. Emergency Information
2. What is the Commission on Disability?
3. Test HTML Output
4. Bye Bye
5. Hello World
```

Each post on each page should belong to their respective categories.

##### Posts

Each `Section` element corresponds to a post, except for some special cases. Their title is their title of the `Section`. 

Make sure the names of the posts don't have spaces before or after the words: `Emergency Information` is good, ` Emergency Information  ` is not. Each post should belong to a category to designate where it goes. For a post that corresponds to a basic `Section` element on a page, just add the corresponding category to the post. However, there may be more complex or different categories for other more complex things, like dropdown information.

### Categories

* [Conventions](#categories)

### Posts
 
 * [Conventions](#posts)
