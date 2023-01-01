# Contributing Rules and Conventions

## Branches

### Pull Requests
When creating a pull request for a branch, notify the other contributer about the pull request. They can look it over to see if there are any errors or mistakes, or anything they want you to fix. If both agree, then the request can be accepted and merged. However, if your change is rather small, and it doesn't affect any other branches (eg. adding an npm script while the other branch is working on building the pages), then you can accept your own pull request without the other person's approval.

Make sure to **always** create a pull request, don't just directly merge your changes.

### Branch Naming Conventions
Naming branches in a clear and concise manner help the contributers understand what the branch's purpose is, and helps them work faster and more efficiently. There are a few guidelines and convention you should follow:

* Make sure the title of the branch is descriptive but short. Between 2-3 words is a good range. Some examples are `about-page`, and `calendar-event-system`
* Connect multiple words with hyphens (`-`)
* Make sure to add the appropriate prefix to the branch. They are: `bug`, `wip`, `util`, `test`, and `junk`.
  * Use `bug` for bug fixes or small changes
  * Use `wip` for big changes and additions or long pieces of work (literally work-in-progress) 
  * Use `util` for edits or additions that don't affect the final output, but help the developers (for example, this branch should have probably been `util-contributing` or `util-contributing-conventions`)
  * Use `test` for a branch that is used for testing
  * Use `junk` for a branch that is throwaway, useless, or when the branch isn't directly doing the testing (for example, if a branch was made to add an npm script to prune all dead branches, and a branch was created just to be dead to test it, but didn't actually add changes to the code, the latter branch could be called `junk-prune` or something like that)
* Some examples of these:
  * A branch for fixing a bug with the links: `bug-links`
  * A branch for adding an `npm prune` script: `util-prune`
  * A branch for working on the `about.html` page: `wip-about-page`, _or_ `about-page`
  * A branch for testing Wordpress connection and stuff: `test-wordpress-connect`
  * A branch for testing if you local repo is connected to the remote one: `junk-repo-test`
* It's completely fine to create a branch from another branch, you don't need to make any additions to the name, but make sure the name doesn't already exist.

## Commits

### Commit Messages
Commit messages are places to put information and descriptions about what was added in the commit and what needs to be done. There are two parts: the title, and message. There are some conventions to follow when writing up these commits.

* Make sure the title gives a brief overview about the commit
* But more descriptions and information in the commit message
* The commit message should have all of the following things (which apply in that scenario):
  * Changes or additions in functionality (eg. added error handling)
  * Bug fixes (eg. fixed typo)
  * List major things that were accomplished (eg. added Navbar)
  * What you got stuck on; errors and warnings (eg. hydration error, syntax error on line 54)
  * Give your thoughts and ideas and what you tried to fix the error (eg. used `for` loop instead of `forEach`)
  * List future areas of work (eg. add hero image component)

