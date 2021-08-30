//Compile and insert the handlebars template for the horizontal scroll
const scrollSource = document.getElementById('scroll-template').innerHTML;
const scrollFunc = Handlebars.compile(scrollSource);
//TODO fill the meetupList with actual content
const scrollContext = {meetupList: ['box1', 'box2', 'box3', 'box4', 'box5']};
const scrollHtml = scrollFunc(scrollContext);
const scrollWrapper = document.getElementById('meetup-scroll');
scrollWrapper.innerHTML = scrollHtml;

//Compile and insert the handlebars template for random article
const articleSource = document.getElementById('random-article').innerHTML;
const articleFunc = Handlebars.compile(articleSource);
//TODO get actual articles...
const articleContext = {current: {title: 'Computers Today', 
content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit Nam viverra ut urna a blandit. Duis condimentum sit amet augue at sollicitudin. Vestibulum ultrices ultricies nisl. Sed imperdiet, mi vitae venenatis gravida, sapien sem luctus est, quis bibendum purus lorem eget ipsum. Morbi pretium scelerisque mi vel molestie. In eu suscipit neque, scelerisque sodales odio. Etiam sit amet nibh eget nibh consectetur fermentum id ac erat.'}};

const articleHtml = articleFunc(articleContext);
const articleHr = document.getElementById('article-hr');
articleHr.insertAdjacentHTML('beforebegin', articleHtml);


