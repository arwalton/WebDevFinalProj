/*
Handlebars in this code follows the example here very closely.
Codecademy.com, ‘Templating with Handlebars cheatsheet’, 2021[Online]. Available: https://www.codecademy.com/learn/learn-handlebars/modules/templating-with-handlebars/cheatsheet [Accessed 20- Aug- 2021]
*/

//Compile and insert the handlebars template for previous meetups
const meetupSource = document.getElementById('previous-meetups').innerHTML;
const meetupFunc = Handlebars.compile(meetupSource);

//Hard-coded list of previous meetups. If we were working with a real website I would query these
//directly from google calendar.
const meetupContext = {
  meetup: [
    {
      title: 'CSS Frameworks',
      date: '09.09.2021',
      description:
        "This week's topic is introducing different CSS frameworks. We'll do some basic work with bootstrap",
    },
    {
      title: 'Sass and Less',
      date: '02.09.2021',
      description:
        "This week we'll be discussing and practicing using Sass and Less in your projects.",
    },
    {
      title: 'Basic CSS',
      date: '26.08.2021',
      description: "Let's talk about how to make that HTML start to look good.",
    },
    {
      title: 'Basic HTML',
      date: '19.08.2021',
      description:
        "We'll talk about what HTML is and why the whole web is based on it.",
    },
    {
      title: 'Welcome back',
      date: '12.08.2021',
      description:
        'This is our first meeting back in person. Remember your masks!',
    },
  ],
};
const meetupHtml = meetupFunc(meetupContext);
const meetupsList = document.getElementById('meetups-list');
meetupsList.innerHTML = meetupHtml;
