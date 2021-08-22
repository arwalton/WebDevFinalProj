//Compile and insert the handlebars template for the horizontal scroll
const scrollSource = document.getElementById('scroll-template').innerHTML;
const scrollFunc = Handlebars.compile(scrollSource);
//TODO fill the meetupList with actual content
const scrollContext = {meetupList: ['box1', 'box2', 'box3', 'box4', 'box5']};
const scrollHtml = scrollFunc(scrollContext);
const scrollWrapper = document.getElementById('meetup-scroll');
scrollWrapper.innerHTML = scrollHtml;