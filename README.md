### WebDev-Erika

# Aotea Skincare Website

This is the recretion of aoteamade.co.nz.

There are two HTML files in the main directory. One is called "index.html" which displays the homepage of the website. The other is called "shop.html" and is the product page/gallery where most features are shown.
There is one CSS file located in WebDev-Erika>assets>css>main.css that is used by both index.html and shop.html. It is sectioned into 4 parts - global css, index css, index responsiveness, and shop css. The decision to use only one css file was due to the fact that two would make for duplicate code (shipping, nav, colours, and borders are used between both pages).
There is one JavaScript file located in WebDev-Erika>assets>js>main.js that is used in both index.html and shop.html. In main.js there is code for API implementation and fetching, window view port checking (animation), adding classes for the animation, and the radio button category filtering.

### Features include:
- A product gallery
  - This can be found in shop.html.
  - Gallery is hardcoded/in raw text.
- Hover effects
  - This can be found in shop.html.
  - A dark overlay is given to an image when the user's mouse hovers over it.
- Gridding is used to display text and information on the website.
- Filtering
  - This can be found in shop.html.
  - This includes some radio buttons that when selected will hide irrelevent products.
  - This is a feature that has some issues.
- Asynchronous Programming
  - API fetching uses asynchronous programming.
- Responsiveness
- Animation
  - Some elements in both HTML files play an animation when in view of either sliding up or sliding in from left to right.

### Known Bugs and Missing Features
- Empty Links
- Missing drop-down menus/pop-up menus
- Radio buttons do not deselect
  - If a user selects more than one radio button then more images will be hidden
- Filtered images are only hidden and are not rearranged
- Half of index.html and shop.html lack responsiveness

### Resources
1. https://www.javascripttutorial.net/javascript-dom/javascript-radio-button/
2. https://stackoverflow.com/questions/68441473/how-can-i-trigger-this-animation-to-start-once-in-viewport
