# Wausau Chess Club Website

The official website for the Wausau Chess Club.

- **Live Site:** https://afrederick13.github.io/wausau-chess-club/

- **Source Repository:** https://github.com/AFrederick13/wausau-chess-club

---

## Workflow

All work is done on the `develop` branch. The `main` branch holds the live production code and automatically deploys to GitHub Pages when updated.

Ensure you are on the `develop` branch and up to date before making edits:

Run in terminal: 

**bash**

`git checkout develop` (This will ensure you are working on the "develop" branch)

`git pull origin develop` (This will pull all code from the "develop" branch, so you are up to date locally with the latest code)

The changes you make on the develop branch will be pushed to the develop branch on GitHub.com. 
Then a pull request can be opened to review the changes, before being merged to the main branch.
Once the develop branch is merged with the main branch, the main branch will automatically re-deploy the website with the new changes.
The develop branch exists solely as a development sandbox, whereas the main branch is where the "live" code lives for the website.

Run a local server to view in your browser while working to observe live changes to code before pushing changes.

Run add and commit commands (see below) after each and every change, to document all individual modifications to the project. 
This ensures a through history to track changes and issues in an isolated manner.
After you are finished working, run push to send all changes made locally to the online repository.

**Terminal Commands**

After making changes to the code, run in terminal:

* `git add .` (the '.' (dot) will stage all modified files to git on your machine locally)

* `git commit -m "Update meeting times"` (The message for the commit explaining the changes you made)

* `git push origin develop` (Push the changes from your local develop branch to the GitHub.com repository develop branch)

Go to the repository on GitHub.com.

Open a Pull Request from develop into main.

Review and merge the pull request. GitHub Pages will automatically deploy the updated site from the main branch.

Do not delete the develop branch after merging.

---

## Files and Directories

**images/**

This directory holds all of the image files for the website. It can be used as follows:  src="images/WCC.png"

**.gitignore**

This file holds all filenames to be ignored by git. Any changes made to these files will not be pushed, so long as they are listed inside .gitignore.

**README.md**

Markdown file documenting the project.

**about.html**

HTML for "about" page

**contact.html**

HTML for "contact" page

**index.html**

HTML for the Home page and default entry point for the site.

**script.js**

JavaScript file for holding the site wide JavaScript.

**style.css**

CSS file for holding the site wide Cascading Style Sheets.

---
