
//Compile and insert the handlebars template for the horizontal scroll
const scrollSource = document.getElementById('scroll-template').innerHTML;
const scrollFunc = Handlebars.compile(scrollSource);

//A note about this section. I would normally call the google api and
//dynamically add calendar events to this, but it's a little beyond
//the scope of the class, and I already demonstrated the fetch function
//on the articles page, so I decided to simplify this and just hard
//code the imaginary data.
const scrollContext = {meetupList: [
    {date: '9.9.2021', info: 'Intro to Bootstrap'},
    {date:'16.9.2021', info: 'Alternative css frameworks'}, 
    {date: '23.9.2021', info: 'Package managers'}, 
    {date: '30.9.2021', info: 'MEAN stack'}, 
    {date: '7.10.2021', info: 'LAMP stack'}]};
const scrollHtml = scrollFunc(scrollContext);
const scrollWrapper = document.getElementById('meetup-scroll');
scrollWrapper.innerHTML = scrollHtml;

//Compile and insert the handlebars template for random article
const articleSource = document.getElementById('random-article').innerHTML;
const articleFunc = Handlebars.compile(articleSource);
//TODO get actual articles...
const articleContext = {current: {title: 'Computers Today', 
content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit Nam viverra ut urna a blandit. Duis condimentum sit amet augue at sollicitudin. Vestibulum ultrices ultricies nisl. Sed imperdiet, mi vitae venenatis gravida, sapien sem luctus est, quis bibendum purus lorem eget ipsum. Morbi pretium scelerisque mi vel molestie.'}};

const articleHtml = articleFunc(articleContext);
const articleHr = document.getElementById('article-heading');
articleHr.insertAdjacentHTML('afterend', articleHtml);


