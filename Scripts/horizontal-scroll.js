/*
This horizontal scroll script is based on this resource
D. Vinther, 'Creating horizontal scrolling containers the right was [CSS Grid]',
2018[Online]. Available: https://uxdesign.cc/creating-horizontal-scrolling-containers-the-right-way-css-grid-c256f64fc585
[Accessed 24- Aug- 2021]
*/

//Count the number of items in the list and set it to a css property
//that is used to adjust the layout of the horizontal scroll section
var root = document.documentElement;
const lists = document.querySelectorAll('.scroll-wrapper');

//Gets any horizontal scroll elements and sets the number of template columns
//in the grid to be equal to the number of elements.
lists.forEach((elem) => {
  const num = elem.children.length;
  elem.style.setProperty('--total', num);
});

//setup the varibles for the calculations
const scrollEle = document.getElementById('meetup-scroll');
let isDown = false;
let startX;
let scrollLeft;

//Add a listener to the scroll container for mousedown events
scrollEle.addEventListener('mousedown', (e) => {
  isDown = true;
  //Add the active class to the scroll element
  scrollEle.classList.add('active');
  //Set the startX property based on the current offset
  startX = e.pageX - scrollEle.offsetLeft;
  //set scrollLeft to the element's current amount of left scroll
  scrollLeft = scrollEle.scrollLeft;
});

//If the mouse leaves the element, the active class is removed and the element
//can no longer be scrolled.
scrollEle.addEventListener('mouseleave', () => {
  isDown = false;
  scrollEle.classList.remove('active');
});

//If the mouse button is unclicked, the active class is removed and the element
//can no longer be scrolled.
scrollEle.addEventListener('mouseup', () => {
  isDown = false;
  scrollEle.classList.remove('active');
});

//If the mousebutton is down and the mouse moves on the element, scroll it
//to the left or right.
scrollEle.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - scrollEle.offsetLeft;
  const walk = (x - startX) * 2; //scroll-fast
  scrollEle.scrollLeft = scrollLeft - walk;
});
