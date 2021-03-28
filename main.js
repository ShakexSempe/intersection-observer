//get reference to the #box
const box = document.getElementById("box");
//get reference to the scrollable #container
//const container = document.getElementById("container");

//callback function to be ran whenever an intersection occures
//function wil run twice: when box comes into view and out of view
//function takes array of entires
//entries describe details about the intersection
const callbackFunction = function(entries){
    console.log(entries[0]);
};

//new instance of intersection observer
const observer = new IntersectionObserver(callbackFunction, {
    threshold: [0.2, 0.4, 0.8]
});

observer.observe(box);



//NB properties of the IO: 
//1-intersectionRatio(how much of box is visible when callbackfunction ran)
// goes from 0 - 1. (x100 = %)
//-isIntersection 