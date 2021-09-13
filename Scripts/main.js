/*
Handlebars in this code follows the example here very closely.
Codecademy.com, ‘Templating with Handlebars cheatsheet’, 2021[Online]. Available: https://www.codecademy.com/learn/learn-handlebars/modules/templating-with-handlebars/cheatsheet [Accessed 20- Aug- 2021]
*/

//Compile and insert the handlebars template for the horizontal scroll
const scrollSource = document.getElementById('scroll-template').innerHTML;
const scrollFunc = Handlebars.compile(scrollSource);

//A note about this section. I would normally call the google api and
//dynamically add calendar events to this, but it's a little beyond
//the scope of the class, and I already demonstrated the fetch function
//on other pages, so I decided to simplify this and just hard
//code the imaginary data.
const scrollContext = {
  meetupList: [
    { date: '9.9.2021', info: 'Intro to Bootstrap' },
    { date: '16.9.2021', info: 'Alternative css frameworks' },
    { date: '23.9.2021', info: 'Package managers' },
    { date: '30.9.2021', info: 'MEAN stack' },
    { date: '7.10.2021', info: 'LAMP stack' },
  ],
};
const scrollHtml = scrollFunc(scrollContext);
const scrollWrapper = document.getElementById('meetup-scroll');
scrollWrapper.innerHTML = scrollHtml;

//Compile and insert the handlebars template for the selected article
const articleSource = document.getElementById('random-article').innerHTML;
const articleFunc = Handlebars.compile(articleSource);
//This article is hard-coded for similar reasons as above. I already
//demonstrate fetching and iterating over collections in other scripts.
const articleContext = {
  current: {
    title: 'Computers Today',
    content:
      'While they have become much more powerful and sophisticated, ' +
      'computers today operate on many of the same principles as the earliest computers. ' +
      'The idea is to replace the human-like, human-like structure that was once found ' +
      'in the earliest human cell phones which were used today in cell phones...',
  },
};

const articleHtml = articleFunc(articleContext);
const articleHr = document.getElementById('article-heading');
articleHr.insertAdjacentHTML('afterend', articleHtml);
