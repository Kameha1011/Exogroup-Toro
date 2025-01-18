# Exogroup / Toro advertising technical test

A technical test for frontend developer position, see all instructions at the PDF file.

## Project Structure

  - js: contains all javascript files being app.js the main file connected directly to index.html file.
  - css: contains all css file, currently there is one page, so main.css corresponds to index.html styles
  - assets: contains all project media such as images, fonts etc.

## CSS Conventions

The project uses plain css and the BEM naming convention, you can read about it in these links:

  - [bem](https://getbem.com/)
  - [bem methodology](https://en.bem.info/methodology/quick-start/)

## JavaScript Conventions

### Variable Naming

Variable names must be in english language and using camelCase or PascalCase in case of classes

### Modular Code

`app.js` should only initialize and orchestrate the app, delegating specific tasks to other modules.

If you want to add a functionality feel free to create a new js file that focuses on that, for example, `questionIndicator.js` only focuses on rendering and updating state and dom content related to the questions and stage indicators

### Constants

Declare constants in `constants.js` file using uppercase and snake_case for the constants names.

### Models

Includes `classes` implementations or bussiness logic

### Utils

You can place here any kind of function that does not have a functionality role directly

## File naming

File should use camelCase or PascalCase in case of a javascript `class` file.

## Code Formatting

Use prettier to format all files, [downlodad here](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) (only vscode).
