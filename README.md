# About

This is a website that hosts posts by different users and comments on each individual post.
The site has a simple responsive design and implementation of two pages.

- Home page
  When the page is loaded from the server, the posts of all users are loaded and 10 random ones are displayed as a list. Each item in the list has the name of the post, the main text is the name of the author. Also, the page contains a drop-down menu in which you can select an individual user and then only his posts will be on the page. When you click on an individual post, you will be taken to a page with comments on the corresponding post
- Page with comments
  This page contains a header with the post id and a button that returns to the main page. The main content of the page is a list of comments on this post. Each comment contains a title, body text, and the name of the user who left the comment.

## Preparation.

1. Make sure you have the LTS version of Node.js installed on your computer.
   Install her, if necessary.
2. Clone this repository.
3. Install the project's base dependencies with the `npm install` command.
4. Start development mode by running `npm start`.
5. Open local server to view it in the browser.
   The page will automatically reload if you make changes to the code. You will
   see the build errors and lint warnings in the console.
6. Command `npm run build` builds the app for production to the build folder. It
   correctly bundles React in production mode and optimizes the build for the
   best performance. The build is minified and the filenames include the hashes.
   App is ready to be deployed.

## Live page

The production version of the project is automatically linted, built, and
deployed to GitHub Pages, in the gh-pages branch, every time the main branch is
updated. For example, after a direct push or an accepted pull request.

The live page can be viewed at
"https://khodetsky.github.io/postlib/".

## How it works

1. After each push to the `main` branch of the GitHub repository, a special
   script (GitHub Action) from `.github/workflows/deploy.yml` file.
2. All repository files are copied to the server where the project is
   initialized and passes linting and assembly before deployment.
3. If all steps were successful, the assembled production version of the project
   files goes to the `gh-pages` branch. Otherwise, in the execution log The
   script will indicate what the problem is.
