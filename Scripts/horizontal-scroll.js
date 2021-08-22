//Count the number of items in the list and set it to a css property
//that is used to adjust the layout of the horizontal scroll section
var root = document.documentElement;
const lists = document.querySelectorAll('.scroll-wrapper');

lists.forEach(elem => {
    const listItems = elem.querySelectorAll('li');
    const num = elem.children.length;
    elem.style.setProperty('--total', num);
});