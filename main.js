//get reference to the #box
const box = document.getElementById("box");
//callback function to be ran whenever an intersection occures
//function wil run twice: when box comes into view and out of view
//function takes array of entires
//entries describe details about the intersection
const callbackFunction = function(entries){
    console.log(entries[0]);
};

//new instance of intersection observer
const observer = new IntersectionObserver(callbackFunction);

observer.observe(box);