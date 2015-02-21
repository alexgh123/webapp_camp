// document.write("It works.");

// i tried to change the text here to better congratulate myself for getting to to work, but i asusme the webpack ./entry.js bundle.js command does more than i thought b/c the index.html page didn't open up with my changes. I'm not going to worry about it too much right now

// require("!style!css!./style.css"); // first loader
require("./style.css"); //binding loaders
document.write(require("./content.js"));

//before doc.write???

// webpack ./entry.js bundle.js - so i think this command 'compiles?' i dont really know what that does