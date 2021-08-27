//Count the number of items in the list and set it to a css property
//that is used to adjust the layout of the horizontal scroll section
var root = document.documentElement;
const lists = document.querySelectorAll('.scroll-wrapper');

lists.forEach(elem => {
    const listItems = elem.querySelectorAll('li');
    const num = elem.children.length;
    elem.style.setProperty('--total', num);
});

const scrollEle = document.getElementById('meetup-scroll');
let isDown = false;
let startX;
let scrollLeft;

scrollEle.addEventListener('mousedown', (e)=>{
    isDown = true;

    scrollEle.classList.add('active');
    startX = e.pageX - scrollEle.offsetLeft;
    scrollLeft = scrollEle.scrollLeft;
});

scrollEle.addEventListener('mouseleave', ()=>{
    isDown = false;
    scrollEle.classList.remove('active');
    
});

scrollEle.addEventListener('mouseup', ()=>{
    isDown = false;
    scrollEle.classList.remove('active');
})

scrollEle.addEventListener('mousemove', (e)=>{
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - scrollEle.offsetLeft;
    const walk = (x - startX) * 2; //scroll-fast
    scrollEle.scrollLeft = scrollLeft - walk;
    console.log(walk);
});
