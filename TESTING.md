# Testing

## Code validators

[HTML Validator](https://validator.w3.org/) : 

- **Home Page**

![Home Page HTML Validator](readme-files/index-html-validator.jpg)

- **Game Page**

![Game Page HTML Validator](readme-files/game-html-validator.jpg)

- **HighScore Page** 

![highscores-html-validator](readme-files/highscores-html-validator.jpg)

[CSS Validator](https://jigsaw.w3.org/css-validator/)

- **Style-CSS Pages**

![style.css validator](readme-files/stylecss-validator.jpg) 
    
- Imported style sheets are absolutely fine.
    
- The --hue errors are variables within CSS that are used correctly within the code to help the color styling on certain elements.

![scores.css](readme-files/scorescss-validator.jpg)

- The --hue error is for a color variable that was also used in the scores.css stylesheet.

[JS Validator](https://jshint.com/)

**Script-JS Page**

![js validator](readme-files/js-validator.jpg)

- The warnings are for const variables that are considered to be available in ES6 or Mozilla JS extensions. They work perfectly fine and didn't cause any errors. 

## Responsiveness

* To test the responsiveness of the site I used 
    * [Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools)
    * [FireFox DevTools](https://developer.mozilla.org/en-US/docs/Tools)
    * [Microsoft Edge](https://developer.microsoft.com/en-us/microsoft-edge/tools/)

Notes:

- The design is responsive in most if not all screen sizes.

[Responsive Checker](https://www.responsivedesignchecker.com/)
    
- Was my checker for multiple screen size tesing devices. 

## Browser compatibility

Notes:

- I rigorously tested on the 3 most known browsers: 
    * [Chrome](https://www.google.com/chrome/)
    * [FireFox](https://www.mozilla.org/en-US/firefox/new/)
    * [Edge](https://www.microsoft.com/en-us/edge)

## Unfixed Bugs

- Not sure if it's a bug but the alert('') message on line 766 in script.js does not appear on my ios device which is a iPhone 11. A google search has led me to believe that it's an ios issue.